"use client";

import { ShoppingBag, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="bg-slate-950 min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-blue-500/10 rounded-2xl mb-6">
            <ShoppingBag className="h-16 w-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Vente de Matériel Informatique</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Je propose une large gamme de matériel informatique de qualité (PC, composants, périphériques) adapté à vos besoins spécifiques.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Comment commander ?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Le catalogue étant vaste et les prix variant régulièrement, je ne propose pas de boutique en ligne directe.
            <br /><br />
            <span className="text-white font-medium">Contactez-moi directement par email</span> en précisant ce que vous recherchez (type de matériel, budget, usage). Je vous répondrai avec une proposition personnalisée et un devis précis.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="mailto:jimmyramsamynaick@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/20 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Me contacter par Email
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 hover:border-slate-600 transition-all text-lg"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-slate-400">
          <div className="p-4">
            <h3 className="text-white font-bold mb-2">Conseil Expert</h3>
            <p className="text-sm">Je vous guide vers le meilleur choix selon votre usage et votre budget.</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-slate-800">
            <h3 className="text-white font-bold mb-2">Matériel de Qualité</h3>
            <p className="text-sm">Sélection rigoureuse des meilleures marques et composants.</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-slate-800">
            <h3 className="text-white font-bold mb-2">Service Après-Vente</h3>
            <p className="text-sm">Garantie constructeur et assistance en cas de problème.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
