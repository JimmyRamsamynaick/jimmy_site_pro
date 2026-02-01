"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag, Code, Wrench, Mail, Home, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/", icon: Home },
    { name: "Services Info", href: "/services", icon: Wrench },
    { name: "Développement", href: "/dev", icon: Code },
    { name: "Boutique", href: "/shop", icon: ShoppingBag },
    { name: "Paiement", href: "/payment", icon: CreditCard },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-500 transition-colors">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Jimmy<span className="text-blue-500">Tech</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              href="/quote"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Demander un Devis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </Link>
              ))}
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-bold mt-4"
              >
                Demander un Devis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
