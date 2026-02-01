import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-bold text-2xl text-white tracking-tight flex items-center gap-2">
              Jimmy<span className="text-blue-500">Tech</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Expert en développement web, maintenance informatique et solutions digitales sur mesure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Dépannage Informatique</Link></li>
              <li><Link href="/dev" className="hover:text-blue-400 transition-colors">Développement Web</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Maintenance & Sécurité</Link></li>
              <li><Link href="/quote" className="hover:text-blue-400 transition-colors">Devis en ligne</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Informations</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/payment" className="hover:text-blue-400 transition-colors">Paiement Sécurisé</Link></li>
              <li><Link href="/shop" className="hover:text-blue-400 transition-colors">Boutique</Link></li>
              <li><Link href="/legal/mentions-legales" className="hover:text-blue-400 transition-colors">Mentions Légales</Link></li>
              <li><Link href="/legal/politique-confidentialite" className="hover:text-blue-400 transition-colors">Politique de confidentialité</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <a href="mailto:jimmyramsamynaick@gmail.com" className="hover:text-white">jimmyramsamynaick@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span>Intervention sur site & à distance</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} JimmyTech. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/JimmyRamsamynaick" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/jimmyramsamynaick/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
