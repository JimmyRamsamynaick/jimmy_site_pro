"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Globe, Cpu, MapPin, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Expertise Web & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Solutions Informatiques
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              Un partenaire de confiance pour vos besoins numériques. Dépannage, maintenance, sécurité et création de sites web modernes.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quote" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1 flex items-center justify-center">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold text-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center">
                Me contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="p-3 bg-blue-500/10 rounded-full mb-4">
                <CreditCard className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Paiement Sécurisé</h3>
              <p className="text-slate-400">PayPal, Revolut & Cash acceptés.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="p-3 bg-purple-500/10 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Intervention Flexible</h3>
              <p className="text-slate-400">À distance ou sur site selon vos besoins.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="p-3 bg-green-500/10 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Service Premium</h3>
              <p className="text-slate-400">Technicien expert et réactif.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mes Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Des solutions adaptées aux particuliers et aux professionnels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Dépannage Informatique"
              description="Résolution de pannes matérielles et logicielles, nettoyage de virus, récupération de données."
              icon={Zap}
              href="/services"
            />
            <ServiceCard
              title="Développement Web"
              description="Création de sites vitrines, e-commerce et applications web sur mesure, rapides et sécurisés."
              icon={Globe}
              href="/dev"
            />
            <ServiceCard
              title="Maintenance & Réseau"
              description="Installation de box, configuration réseau, optimisation des performances et mises à jour."
              icon={Cpu}
              href="/services"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold text-lg inline-flex items-center">
              Voir tous les services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Un projet ou un problème informatique ?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Obtenez une estimation gratuite et rapide pour votre intervention ou votre projet web.
          </p>
          <Link href="/quote" className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
            Commencer mon devis
          </Link>
        </div>
      </section>
    </div>
  );
}
