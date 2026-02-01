export default function MentionsLegales() {
  return (
    <div className="bg-slate-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-slate-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Mentions Légales</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Édition du site</h2>
            <p>
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong>JimmyTech</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><strong>Propriétaire du site :</strong> Jimmy Ramsamynaick</li>
              <li><strong>Statut :</strong> Entrepreneur Individuel / Freelance</li>
              <li><strong>Contact :</strong> jimmyramsamynaick@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Hébergement</h2>
            <p>
              Le site est hébergé sur un serveur privé virtuel (VPS) géré par le propriétaire.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><strong>Hébergeur :</strong> Contabo GmbH</li>
              <li><strong>Adresse :</strong> Aschauer Straße 32a, 81549 Munich, Allemagne</li>
              <li><strong>Site web :</strong> https://contabo.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Propriété intellectuelle et contrefaçons</h2>
            <p>
              <strong>Jimmy Ramsamynaick</strong> est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
            </p>
            <p className="mt-2">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong>Jimmy Ramsamynaick</strong>.
            </p>
            <p className="mt-2">
              Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Limitations de responsabilité</h2>
            <p>
              <strong>Jimmy Ramsamynaick</strong> ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site.
            </p>
            <p className="mt-2">
              <strong>Jimmy Ramsamynaick</strong> décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations et contenus présents sur le site.
            </p>
            <p className="mt-2">
              <strong>Jimmy Ramsamynaick</strong> s'engage à sécuriser au mieux le site, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. CNIL et gestion des données personnelles</h2>
            <p>
              Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l'utilisateur du site dispose d'un droit d'accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à : <strong>jimmyramsamynaick@gmail.com</strong>.
            </p>
            <p className="mt-2">
              Pour plus d'informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire...), lisez notre <a href="/legal/politique-confidentialite" className="text-blue-400 hover:text-blue-300">Politique de Confidentialité</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Liens hypertextes et cookies</h2>
            <p>
              Le site contient des liens hypertextes vers d'autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d'autres sites vers celui-ci.
            </p>
            <p className="mt-2">
              La navigation sur le site est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur.
            </p>
            <p className="mt-2">
              Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d'un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple.
            </p>
            <p className="mt-2">
              Vous avez la possibilité <strong>d'accepter ou de refuser les cookies</strong> en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Droit applicable et attribution de juridiction</h2>
            <p>
              Tout litige en relation avec l'utilisation du site est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
