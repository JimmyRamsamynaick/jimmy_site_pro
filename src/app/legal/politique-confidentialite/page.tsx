export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-slate-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-slate-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Politique de Confidentialité</h1>

        <div className="space-y-8">
          <section>
            <p>
              Le site <strong>JimmyTech</strong> porte une attention particulière à la protection de la vie privée de ses utilisateurs et s'engage à respecter les dispositions du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles collectées sur le site est : <strong>Jimmy Ramsamynaick</strong>.
            </p>
            <p>Email : <strong>jimmyramsamynaick@gmail.com</strong></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Données collectées</h2>
            <p>
              Nous collectons les données suivantes lorsque vous utilisez notre formulaire de contact, de demande de devis ou lors d'un paiement :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Nom et Prénom</li>
              <li>Adresse email</li>
              <li>Informations relatives à votre demande (type de panne, description)</li>
              <li>Adresse postale (uniquement si nécessaire pour une intervention sur site ou facturation)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Finalités du traitement</h2>
            <p>
              Vos données personnelles sont collectées pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><strong>Gestion de la relation client :</strong> Répondre à vos demandes de contact et de devis.</li>
              <li><strong>Prestation de service :</strong> Assurer le dépannage, l'installation ou le développement demandé.</li>
              <li><strong>Facturation :</strong> Établir les factures conformément aux obligations légales.</li>
              <li><strong>Amélioration du service :</strong> Analyser l'utilisation du site pour l'optimiser (statistiques anonymes).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Destinataires des données</h2>
            <p>
              Vos données personnelles sont strictement confidentielles et destinées uniquement à <strong>Jimmy Ramsamynaick</strong>. Elles ne sont jamais vendues, louées ou communiquées à des tiers, sauf obligation légale (ex: administration fiscale).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><strong>Données de contact / devis :</strong> 3 ans à compter du dernier contact.</li>
              <li><strong>Données de facturation :</strong> 10 ans (obligation légale comptable).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Sécurité</h2>
            <p>
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque, afin de protéger vos données contre l'accès non autorisé, la modification, la divulgation ou la destruction. Le site utilise notamment un protocole de chiffrement SSL (https).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Vos droits</h2>
            <p>
              Conformément à la réglementation en vigueur, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Droit d'accès et de rectification.</li>
              <li>Droit à l'effacement (droit à l'oubli).</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit d'opposition au traitement.</li>
              <li>Droit à la portabilité des données.</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong>jimmyramsamynaick@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
