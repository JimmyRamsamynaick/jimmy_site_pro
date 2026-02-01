"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calculator, Send, AlertCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const quoteSchema = z.object({
  serviceType: z.enum(["depannage", "maintenance", "dev_web", "installation", "autre"]),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  interventionType: z.enum(["distance", "site"]),
  zone: z.enum(["zone1", "zone2", "zone3"]).optional(), // zone1: 0-10, zone2: 10-30, zone3: 30+
  urgency: z.boolean().default(false),
  email: z.string().email("Email invalide"),
  name: z.string().min(2, "Nom requis"),
  phone: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
  const [estimate, setEstimate] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      urgency: false,
      interventionType: "distance",
    }
  });

  const interventionType = watch("interventionType");
  const serviceType = watch("serviceType");
  const zone = watch("zone");
  const urgency = watch("urgency");

  const calculateEstimate = () => {
    let basePrice = 0;
    
    // Base prices (Estimation)
    switch (serviceType) {
      case "depannage": basePrice = 50; break;
      case "maintenance": basePrice = 80; break;
      case "installation": basePrice = 60; break;
      case "dev_web": basePrice = 500; break; // Starting price
      case "autre": basePrice = 50; break;
    }

    // Travel fees
    if (interventionType === "site") {
      if (zone === "zone2") basePrice += 15;
      // Zone 3 is "Sur devis", so maybe we don't add a fixed cost but mark it
    }

    // Urgency
    if (urgency) {
      basePrice *= 1.5;
    }

    setEstimate(basePrice);
  };

  const onSubmit = async (data: QuoteFormData) => {
    setLoading(true);
    
    try {
      // 1. Email pour l'administrateur (Jimmy)
      const adminEmailPromise = fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: "jimmyramsamynaick@gmail.com",
          replyTo: data.email,
          subject: `[DEVIS] Nouvelle demande : ${data.serviceType} - ${data.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb;">Nouvelle demande de devis</h2>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p><strong>Nom:</strong> ${data.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                ${data.phone ? `<p><strong>Téléphone:</strong> ${data.phone}</p>` : ''}
                <hr style="border-color: #e2e8f0; margin: 15px 0;" />
                <p><strong>Service:</strong> ${data.serviceType}</p>
                <p><strong>Type d'intervention:</strong> ${data.interventionType === 'site' ? 'Sur Site' : 'À Distance'}</p>
                <p><strong>Urgence:</strong> ${data.urgency ? '<span style="color: red; font-weight: bold;">OUI (+50%)</span>' : 'Non'}</p>
                ${data.zone ? `<p><strong>Zone:</strong> ${data.zone}</p>` : ''}
                <hr style="border-color: #e2e8f0; margin: 15px 0;" />
                <h3 style="color: #1e293b;">Description du problème:</h3>
                <p style="white-space: pre-wrap; color: #475569;">${data.description}</p>
              </div>
            </div>
          `,
        }),
      });

      // 2. Email de confirmation pour le client
      const clientEmailPromise = fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: data.email,
          subject: `Confirmation de votre demande de devis - JimmyTech`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb;">Demande de devis reçue</h2>
              <p>Bonjour <strong>${data.name}</strong>,</p>
              <p>Nous avons bien reçu votre demande de devis concernant : <strong>${data.serviceType}</strong>.</p>
              <p>Nous allons étudier votre demande et revenir vers vous sous 24h avec une estimation précise.</p>
              
              <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #1e293b;">Récapitulatif de votre demande :</h3>
                <ul style="padding-left: 20px; color: #475569;">
                  <li><strong>Service :</strong> ${data.serviceType}</li>
                  <li><strong>Intervention :</strong> ${data.interventionType === 'site' ? 'Sur Site' : 'À Distance'}</li>
                  <li><strong>Urgence :</strong> ${data.urgency ? 'Oui' : 'Non'}</li>
                </ul>
              </div>

              <p>Si vous avez des questions supplémentaires, n'hésitez pas à répondre directement à cet email.</p>
              <br/>
              <p>Cordialement,</p>
              <p><strong>L'équipe JimmyTech</strong><br/>
              <a href="https://jimmy-pro.duckdns.org/" style="color: #2563eb; text-decoration: none;">jimmy-pro.duckdns.org</a></p>
            </div>
          `,
        }),
      });

      // Wait for both emails to be sent (or at least attempted)
      const [adminResponse, clientResponse] = await Promise.all([adminEmailPromise, clientEmailPromise]);

      if (adminResponse.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Erreur envoi email admin");
        // Even if admin email fails, if client email works, it's half good, but we want to ensure admin gets it.
        // For UX, if one fails, we might still want to show success but log error.
        // Let's assume if admin email fails, it's a critical error.
        alert("Une erreur est survenue lors de l'envoi de la demande. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur de connexion. Veuillez vérifier votre connexion internet.");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center"
      >
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Demande envoyée !</h3>
        <p className="text-slate-300 mb-6">
          Votre demande de devis a bien été reçue. Vous recevrez une estimation détaillée par email sous peu.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-green-400 hover:text-green-300 font-medium underline"
        >
          Nouvelle demande
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Service Type */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">Type de Service</label>
          <select 
            {...register("serviceType")}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            onChange={(e) => {
              register("serviceType").onChange(e);
              calculateEstimate();
            }}
          >
            <option value="">Sélectionnez un service...</option>
            <option value="depannage">Dépannage Informatique</option>
            <option value="maintenance">Maintenance & Nettoyage</option>
            <option value="installation">Installation & Configuration</option>
            <option value="dev_web">Développement Web</option>
            <option value="autre">Autre demande</option>
          </select>
          {errors.serviceType && <p className="text-red-500 text-sm">{errors.serviceType.message}</p>}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">Description du problème / projet</label>
          <textarea 
            {...register("description")}
            rows={4}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Décrivez votre besoin en quelques lignes..."
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Intervention Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Type d'intervention</label>
            <div className="flex gap-4">
              <label className={`flex-1 cursor-pointer border rounded-lg p-3 flex items-center justify-center transition-all ${interventionType === 'distance' ? 'bg-blue-600/20 border-blue-500 text-blue-400' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}>
                <input 
                  type="radio" 
                  value="distance" 
                  {...register("interventionType")}
                  className="hidden"
                />
                À distance
              </label>
              <label className={`flex-1 cursor-pointer border rounded-lg p-3 flex items-center justify-center transition-all ${interventionType === 'site' ? 'bg-blue-600/20 border-blue-500 text-blue-400' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}>
                <input 
                  type="radio" 
                  value="site" 
                  {...register("interventionType")}
                  className="hidden"
                />
                Sur site
              </label>
            </div>
          </div>

          {/* Zone (Conditional) */}
          {interventionType === 'site' && (
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <label className="block text-sm font-medium text-slate-300">Zone d'intervention</label>
              <select 
                {...register("zone")}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="zone1">Zone 1 (0-10 km) - 10€</option>
                <option value="zone2">Zone 2 (10-30 km) - 20€</option>
                <option value="zone3">Zone 3 (+30 km) - Sur devis</option>
              </select>
            </motion.div>
          )}
        </div>

        {/* Urgency */}
        <div className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <input 
            type="checkbox" 
            {...register("urgency")}
            id="urgency"
            className="w-5 h-5 rounded border-slate-700 bg-slate-900 text-red-500 focus:ring-red-500 focus:ring-offset-slate-900"
          />
          <label htmlFor="urgency" className="text-slate-200 font-medium cursor-pointer flex-1">
            Urgence (Intervention sous 24h) <span className="text-red-400 text-sm block md:inline md:ml-2">+50% sur le tarif de base</span>
          </label>
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Nom complet</label>
            <input 
              type="text" 
              {...register("name")}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Votre nom"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Email</label>
            <input 
              type="email" 
              {...register("email")}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="votre@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
        </div>

        {/* Phone (Optional) */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">Téléphone (Optionnel)</label>
          <input 
            type="tel" 
            {...register("phone")}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="06 12 34 56 78"
          />
        </div>

        {/* Live Estimate Display - Removed as requested */}
        {/* <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300 font-medium flex items-center">
              <Calculator className="w-5 h-5 mr-2 text-blue-400" />
              Estimation indicative
            </span>
            <span className="text-2xl font-bold text-white">
              {estimate ? `${estimate} €` : "-- €"}
              <span className="text-sm text-slate-400 font-normal ml-1">*</span>
            </span>
          </div>
          <p className="text-xs text-slate-400">
            * Ce montant est une estimation hors taxes. Un devis final vous sera envoyé. Un acompte peut être demandé avant intervention.
          </p>
        </div> */}

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <span className="animate-pulse">Envoi en cours...</span>
          ) : (
            <>
              Envoyer la demande <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </button>

        <div className="flex items-start gap-3 text-sm text-slate-500 bg-slate-950/50 p-4 rounded-lg">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-slate-400" />
          <p>
            En soumettant ce formulaire, vous acceptez d'être recontacté par email ou téléphone. Vos données restent confidentielles.
          </p>
        </div>
      </form>
    </div>
  );
}
