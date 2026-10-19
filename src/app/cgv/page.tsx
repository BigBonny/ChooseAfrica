import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata = {
  title: "Conditions Générales de Vente — Choose Africa Events",
  description:
    "Conditions Générales de Vente d'abonnement des produits médias, des services numériques et autres — Mbouma Kohomm Holding & Filiales.",
};

const societes = [
  "Scribes Press Agency",
  "Events Medias inc.",
  "Deal Com. (DCI)",
  "PMG-Events (PMGE)",
  "Mediastores",
  "Choose Africa Events",
  "Eco-Business Journal",
  "African Elites Book (AEB)",
  "Mutual Fund (MF)",
  "African Campus Institute (ACI)",
  "Panafrica Hebdo",
  "Africa Defense & Security",
  "So Africa Magazine",
  "Africa Sciences",
  "Africa Justice",
  "Campus Africa",
  "Candaces",
  "Black Legends",
  "Visit Africa",
  "Ebony's Magazine",
  "Epicurius",
];

const sections = [
  {
    title: "1. Les présentes Conditions Générales de Vente s'appliquent",
    body: [
      "À la souscription d'un abonnement à un produit de presse quel qu'en soit le support (ci-après la « Publication ») et/ou aux services liés à ce produit de presse (ci-après les « Services ») ;",
      "Édités par les sociétés du groupe MBOUMA KOHOMM HOLDING, notamment : Scribes Press Agency, Events Medias inc., Deal Com. (DCI), PMG-Events (PMGE), Mediastores, Choose Africa Events, Eco-Business Journal, African Elites Book (AEB), Mutual Fund (MF), African Campus Institute (ACI), Panafrica Hebdo, Africa Defense & Security, So Africa Magazine, Africa Sciences, Africa Justice, Campus Africa, Candaces, Black Legends, Visit Africa, Ebony's Magazine, Epicurius — désignés ensemble ci-après par « l'Éditeur ».",
    ],
  },
  {
    title: "2. Définitions",
    body: [
      "Abonné : toute personne physique ou morale ayant souscrit un abonnement en application des présentes Conditions Générales.",
      "Abonnement : toute commande portant sur plusieurs numéros d'une Publication donnée et/ou sur des Services.",
      "Bon de commande : formulaire d'inscription, bon de commande, bulletin d'abonnement, support d'offre commerciale… en format papier ou électronique permettant la souscription d'un Abonnement.",
      "Publication : titre de presse périodique en format papier ou numérique de l'Éditeur dont le titre et les caractéristiques (périodicité, format…) sont indiqués dans le Bon de Commande.",
      "Service : service associé à la Publication.",
      "Sites : sites internet édités par l'Éditeur sur lesquels l'Abonné peut accéder à la version numérique de la Publication et/ou aux Services.",
    ],
  },
  {
    title: "3. Acceptation des Conditions Générales",
    body: [
      "Toute souscription d'un Abonnement à l'une des Publications et/ou Services de l'Éditeur emporte de plein droit adhésion et acceptation des présentes Conditions Générales de Vente (et le cas échéant des conditions spécifiques propres à chaque Publication ou Service) qui prévalent sur tout document émanant de l'Abonné quelle qu'en soit la nature et le moment d'émission, sauf convention expresse convenue d'un commun accord avec l'Éditeur.",
      "Les documents contractuels constituant les contrats d'Abonnement sont par ordre de priorité : le Bon de Commande, le Formulaire Numérique, l'Ordre d'Insertion publicitaire, les présentes conditions générales, et lorsqu'elles existent, les conditions spécifiques propres à chaque Publication ou Service. En cas de contradiction entre les différents documents, le document de rang supérieur prévaudra.",
      "Il est précisé que les Conditions Générales pourront être modifiées unilatéralement par l'Éditeur. En cas de modification des Conditions Générales de Vente, celles qui sont applicables à la commande sont celles qui étaient en ligne et acceptées au jour de la passation de la commande.",
    ],
  },
  {
    title: "4. Conditions d'accès ou de livraison",
    body: [
      "La Publication ou le Service est fourni selon les formats, les supports et le nombre de numéros précisé lors de la commande.",
      "4.1. Abonnement à un support papier : Les Publications sur support papier sont acheminées par La Poste à l'adresse indiquée sur le Bon de Commande. L'Abonné s'engage à donner toutes les informations nécessaires à la bonne livraison et à transmettre sans délai à l'Éditeur tout changement d'adresse, de nom. Les horaires et délais de livraison sont ceux pratiqués habituellement par les services postaux, l'Éditeur déclinant toute responsabilité en cas de défaut et/ou retard d'acheminement causé par un dysfonctionnement du service postal.",
      "4.2. Abonnement à un support en ligne : L'inscription pour référencement de données, l'accès et la consultation de la Publication et/ou d'un Service sur abonnement en format électronique nécessitent la création par l'Abonné d'un compte sur le Site, compte unique et personnel. L'Abonné s'engage à fournir des informations véridiques, exactes, à jour et complètes sur son identité, sa fonction, l'identité de sa société ainsi que toute information demandée dans le Bon de Commande. Il s'engage à mettre à jour ses informations sur son compte dès que nécessaire.",
      "Dans l'hypothèse où l'Abonné fournirait des données d'inscription fausses, inexactes, périmées ou incomplètes, l'Éditeur sera en droit de suspendre ou de résilier son compte Abonné sans préavis et de lui refuser immédiatement et pour le futur l'accès à tout ou partie du site ou de la Publication et/ou du Service, sans avoir à rembourser les sommes réglées.",
      "L'Abonné est seul responsable de l'usage qui pourrait être fait de son compte, et seul garant de la confidentialité de ses données d'accès. Il s'engage à informer l'Éditeur immédiatement de toute utilisation non autorisée de son compte, et/ou de toute atteinte à la confidentialité et à la sécurité de ses moyens d'identification.",
      "L'Abonné fait son affaire personnelle de la mise en place des moyens informatiques et de télécommunication permettant l'accès au Site. L'Abonné conserve à sa charge les frais de télécommunication lors de l'accès à l'Internet et l'utilisation du Site et des Services auxquels il a souscrit.",
    ],
  },
  {
    title: "5. Entrée en vigueur et durée d'abonnement",
    body: [
      "5.1. Les Abonnements souscrits pour un nombre déterminé de numéros ou pour une durée ne peuvent être résiliés par l'Abonné que pour motif légitime à savoir : chômage, hospitalisation de plus de six (6) mois, surendettement, décès, cécité, faillite personnelle. Les demandes de résiliation invoquant l'un de ces motifs devront être dûment justifiées. L'Abonné devra adresser sa demande par courrier écrit au Service Abonnement de l'Éditeur — Service Abonnements, 9 rue Anatole de la Forge, 75017 Paris.",
      "5.2. Droit de Rétractation : L'Abonné professionnel ne bénéficie d'aucun droit de rétractation. Pour l'Abonné consommateur au sens du Code de la Consommation : l'Abonné peut exercer son droit de rétractation dans un délai de 14 jours suivant la date de commande en adressant à l'Éditeur par courrier RAR le formulaire ou tout autre document exprimant clairement sa volonté de se rétracter. Son abonnement ne débutera qu'à l'expiration du délai de rétractation. Le remboursement s'effectuera à réception des Publications retournées. Pour un Service en Ligne, afin de pouvoir bénéficier immédiatement du Service, l'Abonné devra renoncer expressément à l'exercice de son droit de rétractation dès sa première connexion au Service souscrit.",
      "5.3. Dans l'hypothèse d'un arrêt de la Publication objet de l'Abonnement, l'Éditeur proposera à l'Abonné son remplacement par une autre Publication qu'il édite, pour le nombre de numéros restant à courir. En cas de non acceptation, l'Éditeur procédera au remboursement au prorata de la somme perçue pour le nombre de numéros restant à courir après la dernière parution.",
      "5.4. Résiliation par l'Éditeur : En cas d'absence de règlement d'une facture, de violation par l'Abonné du périmètre des droits qui lui sont concédés, ou de tentative d'intrusion, d'atteinte à l'intégrité logicielle ou de contrefaçon des sites internet et Services par l'Abonné, l'Éditeur peut à sa seule discrétion suspendre l'accès au Service sans notification préalable, et/ou prononcer la résiliation de l'Abonnement de plein droit à l'expiration d'un préavis de 15 jours après envoi d'une mise en demeure par lettre recommandée avec demande d'avis de réception. Dans tous les cas, toutes les sommes restant dues par l'Abonné seront immédiatement exigibles.",
      "5.5. L'Abonnement démarre à compter de l'enregistrement par l'Éditeur de la commande. L'Abonnement est souscrit pour le nombre de numéros de la Publication ou la durée initiale précisée sur le bon de commande. Les abonnements en durée libre (paiement par prélèvement récurrent sur carte ou compte bancaire) sont souscrits pour la durée initiale et se renouvellent automatiquement sauf résiliation à tout moment par l'Abonné auprès de l'Éditeur par envoi d'un courrier recommandé avec accusé de réception. La résiliation sera effective un mois après réception de la résiliation par RAR.",
    ],
  },
  {
    title: "6. Propriété intellectuelle",
    body: [
      "L'Éditeur est seul propriétaire du contenu (textes, images, marques…) de ses Publications et Services et de tous les droits d'exploitation qui y affèrent. L'Abonné est uniquement autorisé à reproduire et imprimer sur papier, pour son seul usage personnel, les contenus auxquels il accède dans le cadre de son Abonnement.",
      "L'Abonné s'interdit expressément : toute reproduction totale ou partielle, toute diffusion ou publication (notamment en ligne, par courrier électronique, par mise en réseau, flux RSS…), à titre gratuit ou onéreux des contenus auxquels il a accès, des marques de l'Éditeur, des titres des Publications, Services ; d'utiliser les titres des Publications, les dénominations / marques des Services ou le nom de l'Éditeur dans ses documents publicitaires et commerciaux, sauf accord préalable et écrit de l'Éditeur ; tout partage même gracieux de l'accès Abonné dont il bénéficie et s'interdit toute transmission de ses codes d'accès à tout tiers non autorisé.",
      "L'Abonné s'engage en outre à respecter les dispositions légales et réglementaires en vigueur et en particulier à ne pas utiliser les forums de discussions, zones de commentaires offerts par l'Éditeur pour créer, écrire ou commettre, transmettre ou communiquer tout message, information ou contenu illicite. L'Abonné s'oblige enfin à ne pas diffuser via la Publication de messages non sollicités de types publicitaire, promotionnel, chaîne de courrier ou autre.",
    ],
  },
  {
    title: "7. Conditions financières",
    body: [
      "7.1. Commande : La souscription d'un Abonnement s'effectue par l'envoi à l'adresse de l'Éditeur d'un Bon de Commande papier dûment complété, ou en ligne sur le Site de l'Éditeur par saisie des données personnelles et informations de paiement demandées et après validation par l'Abonné de ses données. Il n'est pas accusé réception des commandes, la livraison des commandes ou l'envoi d'un e-mail tenant lieu de confirmation. Les commandes non conformes ou incomplètes ne pourront pas être satisfaites.",
      "7.2. Facturation et paiement : Les tarifs des Abonnements et des Services numériques sont indiqués en euros T.T.C. frais d'envoi inclus pour les livraisons papier en Europe. Les frais de livraison en Afrique et à l'international sont en sus. Ils sont disponibles sur demande au Service Abonnement ou en ligne. Tout changement de TVA sera répercuté automatiquement sur le prix de l'abonnement en cours à l'exception des abonnements intégralement réglés à l'Éditeur avant le changement de TVA.",
      "Après validation de sa commande par l'Abonné, l'Éditeur établit et adresse à ce dernier la facture de son Abonnement ou de sa souscription.",
      "Moyens de paiement : par chèque envoyé à l'adresse de l'Éditeur indiquée sur le Bon de Commande et accompagné de la facture ; par virement bancaire à l'ordre de l'Éditeur dont les coordonnées figurent sur le Bon de Commande, le virement devant être accompagné des références de commande ; par carte bancaire CB ou VISA en saisissant les coordonnées et la date d'expiration de sa carte bancaire, les données étant cryptées lors de leur transmission selon le protocole SSL.",
      "Une fois le paiement en ligne effectif et validé par la banque, l'Abonné recevra une confirmation par mail.",
    ],
  },
];

export default function CgvPage() {
  return (
    <>
      <PageHero
        image="/images/office.jpg"
        eyebrow="Conditions Générales de Vente"
        title="CGV — Mbouma Kohomm Holding & Filiales"
        description="Conditions Générales de Vente d'abonnement des produits médias, des services numériques et autres."
      />

      <Section eyebrow="Mentions légales" title="Éditeur">
        <div className="card p-8">
          <p className="text-sm leading-relaxed text-ink/80">
            Les présentes Conditions Générales de Vente s'appliquent aux
            produits édités par les sociétés du groupe{" "}
            <strong>MBOUMA KOHOMM HOLDING</strong>, notamment :
          </p>
          <ul className="mt-5 grid gap-x-8 gap-y-2 text-sm text-muted sm:grid-cols-2 lg:grid-cols-3">
            {societes.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="mt-1 text-gold">✦</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">
            Désignés ensemble ci-après par « l'Éditeur ». Service Abonnements —
            9 rue Anatole de la Forge, 75017 Paris.{" "}
            <a
              href="mailto:commercial-office@dealcom.com"
              className="font-semibold text-emerald underline hover:text-gold-dark"
            >
              commercial-office@dealcom.com
            </a>
          </p>
        </div>
      </Section>

      <section className="bg-sand/50">
        <Section eyebrow="Texte intégral" title="Conditions Générales de Vente">
          <div className="mx-auto max-w-4xl space-y-10">
            {sections.map((s, i) => (
              <div key={i} className="card p-8 sm:p-9">
                <h3 className="font-display text-xl font-bold text-emerald">
                  {s.title}
                </h3>
                <div className="gold-rule mt-3" />
                <div className="mt-5 space-y-4">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-ink/75">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <div className="mx-auto max-w-4xl card p-8 text-center sm:p-10">
          <h3 className="font-display text-2xl font-bold text-ink">
            Une question sur nos tarifs ou nos CGV ?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            Contactez le Service Abonnements pour toute information
            complémentaire sur les abonnements, l'inscription au Sommet ou les
            conditions générales de vente.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold px-7 py-3 text-sm">
              Nous contacter
            </Link>
            <Link
              href="/abonnements"
              className="btn-outline-dark px-7 py-3 text-sm"
            >
              Voir les abonnements
            </Link>
            <Link
              href="/inscription"
              className="btn-outline-dark px-7 py-3 text-sm"
            >
              S'inscrire au Sommet
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
