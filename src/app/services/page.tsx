"use client";

import { Wrench, Shield, Monitor, Wifi, HardDrive, Smartphone, Server, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "Dépannage Informatique",
      description: "Diagnostic et réparation de pannes matérielles (PC/Mac) et logicielles. Remplacement d'écran, clavier, batterie, etc.",
      icon: Wrench,
    },
    {
      title: "Nettoyage & Sécurité",
      description: "Suppression de virus, malwares et publicités intempestives. Optimisation de la vitesse et sécurisation des données.",
      icon: Shield,
    },
    {
      title: "Installation & Configuration",
      description: "Installation de Windows/macOS, configuration de logiciels, imprimantes, et périphériques.",
      icon: Monitor,
    },
    {
      title: "Assistance à Distance",
      description: "Prise en main à distance sécurisée pour résoudre vos problèmes logiciels rapidement sans déplacement.",
      icon: Wifi,
    },
    {
      title: "Récupération de Données",
      description: "Récupération de fichiers perdus, supprimés ou sur disques durs endommagés (selon état).",
      icon: HardDrive,
    },
    {
      title: "Réseau & Internet",
      description: "Installation Box Internet, répéteurs Wifi, câblage RJ45, configuration réseau domestique ou PME.",
      icon: Server,
    },
  ];

  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Services Informatiques</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Des solutions complètes pour particuliers et professionnels. Intervention rapide et efficace.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="h-7 w-7 text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Intervention Zones & Fees */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 bg-blue-500/20 rounded-full text-blue-400">
              <MapPin className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Zone d'intervention & Frais</h3>
              <p className="text-slate-300 mb-4">
                J'interviens sur site dans un rayon de <strong>30km</strong>. 
                Au-delà, des frais de déplacement peuvent s'appliquer.
              </p>
              <ul className="text-slate-400 space-y-2 mb-6 text-sm">
                <li>• <span className="text-white font-medium">0 - 10 km :</span> Forfait 10€</li>
                <li>• <span className="text-white font-medium">10 - 30 km :</span> Forfait 20€</li>
                <li>• <span className="text-white font-medium">+ 30 km :</span> Sur devis</li>
              </ul>
              <Link href="/quote" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Estimer mon intervention
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
