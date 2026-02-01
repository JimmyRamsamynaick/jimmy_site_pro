"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message est trop court"),
  honeypot: z.string().optional(), // Hidden field for spam
  captcha: z.string().min(1, "Veuillez résoudre le calcul"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaNum1] = useState(Math.floor(Math.random() * 10));
  const [captchaNum2] = useState(Math.floor(Math.random() * 10));

  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check
    if (data.honeypot) return;

    // Captcha check
    if (parseInt(data.captcha) !== captchaNum1 + captchaNum2) {
      setError("captcha", { type: "manual", message: "Calcul incorrect" });
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          replyTo: data.email,
          subject: `Contact Site Web : ${data.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb;">Nouveau Message de Contact</h2>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p><strong>Nom:</strong> ${data.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                <hr style="border-color: #e2e8f0; margin: 15px 0;" />
                <h3 style="color: #1e293b;">Message:</h3>
                <p style="white-space: pre-wrap; color: #475569;">${data.message}</p>
              </div>
            </div>
          `,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Une erreur est survenue lors de l'envoi du message.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur de connexion.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
        <p className="text-slate-300 mb-6">
          Je vous répondrai dans les plus brefs délais.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-green-400 hover:text-green-300 font-medium underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
      {/* Honeypot (Hidden) */}
      <input type="text" {...register("honeypot")} className="hidden" autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">Nom complet</label>
          <input 
            type="text" 
            {...register("name")}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="Votre nom"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">Email</label>
          <input 
            type="email" 
            {...register("email")}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="votre@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-300">Message</label>
        <textarea 
          {...register("message")}
          rows={5}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
          placeholder="Comment puis-je vous aider ?"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      {/* Custom Captcha */}
      <div className="space-y-2 bg-slate-950 p-4 rounded-lg border border-slate-800">
        <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500" /> Sécurité : Combien font {captchaNum1} + {captchaNum2} ?
        </label>
        <input 
          type="number" 
          {...register("captcha")}
          className="w-full md:w-1/3 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          placeholder="Réponse"
        />
        {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha.message}</p>}
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all transform active:scale-[0.98] flex items-center justify-center"
      >
        Envoyer le message <Send className="ml-2 h-5 w-5" />
      </button>
    </form>
  );
}
