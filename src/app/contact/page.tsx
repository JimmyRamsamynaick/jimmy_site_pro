import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contactez-moi</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Une question ? Un projet ? Besoin d'un dépannage urgent ?
            Remplissez le formulaire ou utilisez les coordonnées directes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase">Email</p>
                    <a href="mailto:jimmyramsamynaick@gmail.com" className="text-white text-base md:text-lg hover:text-blue-400 transition-colors break-all">jimmyramsamynaick@gmail.com</a>
                    <p className="text-slate-400 text-sm">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase">Localisation</p>
                    <p className="text-white text-lg">Votre Ville, France</p>
                    <p className="text-slate-400 text-sm">Intervention 30km alentours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 p-8 rounded-2xl border border-blue-500/20">
              <h3 className="text-lg font-bold text-white mb-2">Facturation & Devis</h3>
              <p className="text-slate-300 text-sm">
                Pour toute intervention ou prestation, une facture détaillée vous sera envoyée par email.
                TVA non applicable, art. 293 B du CGI (si auto-entrepreneur).
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
