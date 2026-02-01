"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CreditCard, Wallet, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [amount, setAmount] = useState("");
  const [service, setService] = useState("");
  const [paymentType, setPaymentType] = useState("acompte"); // acompte | total

  useEffect(() => {
    const qAmount = searchParams.get("amount");
    const qService = searchParams.get("service");
    const qType = searchParams.get("type");

    if (qAmount) setAmount(qAmount);
    if (qService) setService(qService);
    if (qType) setPaymentType(qType);
  }, [searchParams]);

  const handlePaymentClick = (provider: "paypal" | "revolut") => {
    if (provider === "paypal") {
      const baseUrl = "https://paypal.me/JimmyRamsamynaick";
      const finalUrl = amount ? `${baseUrl}/${amount}EUR` : baseUrl;
      window.open(finalUrl, "_blank");
    } else if (provider === "revolut") {
      window.open("https://revolut.me/jramsamynaick05", "_blank");
    }
    
    // Redirect to confirmation page to give instructions
    router.push(`/payment/confirm?provider=${provider}&amount=${amount}&service=${service}`);
  };

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="bg-slate-800 p-6 text-center border-b border-slate-700">
          <h1 className="text-xl font-bold text-white mb-1">Paiement Sécurisé</h1>
          <p className="text-slate-400 text-sm flex items-center justify-center gap-1">
            <Lock className="h-3 w-3" /> Connexion chiffrée SSL
          </p>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Service</label>
              <input 
                type="text" 
                value={service} 
                onChange={(e) => setService(e.target.value)}
                placeholder="Ex: Dépannage à distance"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white font-medium focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Montant (€)</label>
                <input 
                  type="number" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white font-bold text-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Type</label>
                <select 
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3.5 text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="acompte">Acompte</option>
                  <option value="total">Total</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <button 
              onClick={() => handlePaymentClick("paypal")}
              className="w-full bg-[#0070BA] hover:bg-[#005ea6] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-900/20"
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Payer avec PayPal
            </button>
            <button 
              onClick={() => handlePaymentClick("revolut")}
              className="w-full bg-[#7D00FF] hover:bg-[#6a00d9] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-all transform hover:-translate-y-0.5 shadow-lg shadow-purple-900/20"
            >
              <Wallet className="mr-2 h-5 w-5" />
              Payer avec Revolut
            </button>
          </div>

          <p className="text-center text-xs text-slate-500 mt-4">
            En cliquant sur l'un des boutons, vous serez redirigé vers la plateforme de paiement sécurisée.
            Aucune donnée bancaire n'est stockée sur ce site.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Chargement...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
