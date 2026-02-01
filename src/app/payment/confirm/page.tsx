"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function PaymentConfirmPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Chargement...</div>}>
      <PaymentConfirmContent />
    </Suspense>
  );
}

function PaymentConfirmContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const service = searchParams.get("service");
  const provider = searchParams.get("provider");
  
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send notification email to admin
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "jimmyramsamynaick@gmail.com",
          subject: `[PAIEMENT] Nouveau paiement ${provider === 'cash' ? 'en espèces' : 'reçu'} de ${email}`,
          html: `
            <h1>Nouveau paiement à vérifier</h1>
            <p><strong>Client :</strong> ${email}</p>
            <p><strong>Montant :</strong> ${amount || "Non spécifié"} €</p>
            <p><strong>Service :</strong> ${service || "Non spécifié"}</p>
            <p><strong>Méthode :</strong> ${provider === 'cash' ? 'Espèces (Sur site)' : provider?.toUpperCase()}</p>
            <hr />
            <p>Veuillez vérifier votre compte ${provider === 'paypal' ? 'PayPal' : provider === 'revolut' ? 'Revolut' : ''} ou encaisser l'argent si espèces.</p>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi de l'email");
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de l'envoi de la confirmation. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {provider === 'cash' ? 'Demande enregistrée !' : 'Paiement Confirmé !'}
          </h2>
          <p className="text-slate-400 mb-6">
            Merci. Vos informations ont été transmises. <br/>
            {provider === 'cash' 
              ? "Le règlement se fera sur place en espèces." 
              : "Nous allons vérifier la réception du paiement."}
            <br/>
            Votre service / confirmation vous sera envoyé par email sous <strong>24 à 48 heures</strong>.
          </p>
          <a href="/" className="text-blue-400 hover:text-blue-300 font-medium">
            Retour à l'accueil
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
      >
        <div className="bg-green-600/10 p-6 text-center border-b border-green-500/20">
          <h1 className="text-xl font-bold text-green-400 mb-1">
            {provider === 'cash' ? 'Paiement en espèces' : 'Paiement effectué'}
          </h1>
          <p className="text-slate-400 text-sm">
            {provider === 'cash' 
              ? "Confirmez vos coordonnées pour le rendez-vous." 
              : "Veuillez confirmer vos coordonnées pour recevoir votre service."}
          </p>
        </div>

        <div className="p-8">
          <div className="mb-6 p-4 bg-slate-950 rounded-lg border border-slate-800">
            <p className="text-sm text-slate-500 mb-1">Récapitulatif</p>
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">{service || "Service"}</span>
              <span className="text-white font-bold">{amount ? `${amount} €` : ""}</span>
            </div>
            {provider && (
               <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-800">
                 <span className="text-slate-500 text-sm">Moyen de paiement</span>
                 <span className="text-blue-400 text-sm font-medium capitalize">{provider === 'cash' ? 'Espèces' : provider}</span>
               </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Adresse Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all flex items-center justify-center"
            >
              {isSubmitting ? 'Envoi...' : 'Confirmer et Recevoir'} <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
