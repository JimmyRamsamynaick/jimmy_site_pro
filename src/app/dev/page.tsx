"use client";

import { Code, Terminal, Layers, Globe, Database } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DevPage() {
  const skills = [
    { name: "Développement Web", icon: Globe, desc: "React, Next.js, Node.js, Tailwind CSS" },
    { name: "Automatisation", icon: Terminal, desc: "Scripts Python, Bash, Tâches planifiées" },
    { name: "Bases de données", icon: Database, desc: "PostgreSQL, MongoDB, Firebase" },
    { name: "Architecture", icon: Layers, desc: "API REST, Microservices, Cloud" },
  ];

  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-3 bg-blue-500/10 rounded-2xl mb-4">
            <Code className="h-10 w-10 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Développement <span className="text-blue-500">Full-Stack</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Je transforme vos idées en solutions digitales performantes. 
            Sites web, applications, scripts d'automatisation sur mesure.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors"
            >
              <skill.icon className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-slate-400 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900/50 to-slate-900 rounded-2xl p-10 text-center border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Un projet web en tête ?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et établissons un cahier des charges clair pour votre futur site ou application.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors">
              Demander un devis
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-colors">
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
