import QuoteForm from "@/components/QuoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demander un Devis Informatique | JimmyTech Auterive",
  description: "Obtenez un devis gratuit pour votre dépannage informatique ou création de site web. Tarifs transparents et intervention rapide à Auterive et Toulouse.",
};

export default function QuotePage() {
  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Demander un Devis</h1>
          <p className="text-lg text-slate-400">
            Obtenez une estimation rapide et précise pour votre projet ou votre dépannage.
            Remplissez le formulaire ci-dessous.
          </p>
        </div>
        
        <QuoteForm />
        
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>
            Pour les interventions urgentes, merci de le préciser dans le formulaire.
            <br />
            Les tarifs sont indicatifs et peuvent varier selon la complexité réelle.
          </p>
        </div>
      </div>
    </div>
  );
}
