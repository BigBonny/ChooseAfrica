export const site = {
  name: "Choose Africa Events",
  tagline: "Dossiers-Pays & Sommets Annuels",
  url: "www.choose-africa.com",
  description:
    "Le rendez-vous international des décideurs, investisseurs et entrepreneurs engagés dans le développement économique de l'Afrique.",
  email: "contact@choose-africa.com",
  phone: "+33 1 00 00 00 00",
  address: "Paris · Brazzaville · Libreville",
  sommetDate: "2026-11-19T09:00:00+01:00",
  sommetLabel: "19 novembre 2026 — Palais des Congrès, Paris",
};

export const nav = [
  { label: "Choose Africa", href: "/choose-africa" },
  { label: "Le Magazine", href: "/magazine" },
  { label: "Le Sommet", href: "/sommet" },
  { label: "Dossiers-Pays", href: "/dossiers-pays" },
  { label: "Les Partenaires", href: "/partenaires" },
  { label: "Inscription", href: "/inscription" },
  { label: "Abonnements", href: "/abonnements" },
  { label: "Contact", href: "/contact" },
  { label: "Vidéo", href: "/video" },
];

export const navPrimary = [
  { label: "Choose Africa", href: "/choose-africa" },
  { label: "Le Sommet", href: "/sommet" },
  { label: "Dossiers-Pays", href: "/dossiers-pays" },
  { label: "Le Magazine", href: "/magazine" },
];

export const navExplorer = [
  {
    label: "Les Partenaires",
    href: "/partenaires",
    desc: "L'écosystème qui nous accompagne",
  },
  {
    label: "Abonnements",
    href: "/abonnements",
    desc: "EBNL & Magazine Choose Africa",
  },
  {
    label: "Vidéo",
    href: "/video",
    desc: "Les sommets et témoignages en images",
  },
  {
    label: "Contact",
    href: "/contact",
    desc: "Une question ? Écrivez-nous",
  },
];

export const countries = [
  {
    slug: "gabon",
    image: "/images/forest.jpg",
    name: "Le Gabon",
    capital: "Libreville",
    flag: "🇬🇦",
    blurb:
      "Au carrefour de l'Afrique centrale, le Gabon offre une stabilité institutionnelle rare, un bassin forestier exceptionnel et des ambitions fortes de diversification économique.",
    sectors: ["Bois & transformation", "Mines & manganese", "Pétrole & gaz", "Agriculture", "Tourisme vert"],
    stats: [
      { label: "Population", value: "2,4 M" },
      { label: "PIB", value: "20 Mds $" },
      { label: "Croissance", value: "2,8 %" },
      { label: "Doing Business", value: "Réforme en cours" },
    ],
  },
  {
    slug: "congo",
    image: "/images/forest2.jpg",
    name: "Le Congo",
    capital: "Brazzaville",
    flag: "🇨🇬",
    blurb:
      "Le Congo s'appuie sur ses ressources pétrolières et forestières pour bâtir une économie diversifiée, ouverte aux investissements dans les infrastructures et l'agro-industrie.",
    sectors: ["Pétrole & gaz", "Bois & transformation", "Agriculture", "Infrastructures", "Énergie"],
    stats: [
      { label: "Population", value: "5,9 M" },
      { label: "PIB", value: "13 Mds $" },
      { label: "Croissance", value: "1,5 %" },
      { label: "Zones économiques", value: "3 ZES" },
    ],
  },
  {
    slug: "cameroun",
    image: "/images/port.jpg",
    name: "Le Cameroun",
    capital: "Yaoundé",
    flag: "🇨🇲",
    blurb:
      "Première économie de la CEMAC, le Cameroun conjugue diversité agricole, industrielle et humaine. Un marché de plus de 27 millions de consommateurs en pleine mutation.",
    sectors: ["Agro-industrie", "Énergie & hydroélectricité", "Mines", "Numérique", "Logistique & ports"],
    stats: [
      { label: "Population", value: "27,9 M" },
      { label: "PIB", value: "44 Mds $" },
      { label: "Croissance", value: "4,3 %" },
      { label: "Port en eau profonde", value: "Kribi" },
    ],
  },
  {
    slug: "benin",
    image: "/images/savanna.jpg",
    name: "Le Bénin",
    capital: "Porto-Novo",
    flag: "🇧🇯",
    blurb:
      "Le Bénin mise sur la gouvernance, la modernisation de l'administration et l'agro-industrie pour transformer son économie et attirer les investisseurs.",
    sectors: ["Coton & textile", "Agriculture", "Tourisme culturel", "Numérique", "Énergie"],
    stats: [
      { label: "Population", value: "13,4 M" },
      { label: "PIB", value: "19 Mds $" },
      { label: "Croissance", value: "5,9 %" },
      { label: "Réforme", value: "Action Gouvernementale" },
    ],
  },
  {
    slug: "togo",
    image: "/images/elephant.jpg",
    name: "Le Togo",
    capital: "Lomé",
    flag: "🇹🇬",
    blurb:
      "Hub logistique de l'Afrique de l'Ouest, le Togo s'appuie sur le port autonome de Lomé et une politique de zones économiques spéciales pour stimuler l'investissement.",
    sectors: ["Logistique & portuaire", "Phosphates & mines", "Agro-industrie", "Numérique", "Énergie"],
    stats: [
      { label: "Population", value: "8,7 M" },
      { label: "PIB", value: "8,8 Mds $" },
      { label: "Croissance", value: "5,3 %" },
      { label: "Port", value: "Lomé (deep-water)" },
    ],
  },
];

export const speakers = [
  {
    name: "M. Jean-Pierre Mbemba",
    role: "Président, Chambre de Commerce Afrique-Europe",
    topic: "Investir dans les chaînes de valeur régionales",
  },
  {
    name: "Mme Aïssatou Diallo",
    role: "Directrice, Banque Africaine de Développement",
    topic: "Financer la transition énergétique en Afrique centrale",
  },
  {
    name: "M. Olivier Laurent",
    role: "CEO, Groupe Industrie & Infrastructure",
    topic: "Partenariats public-privé : retours d'expérience",
  },
  {
    name: "Mme Fatou Ndiaye",
    role: "Fondatrice, Africa Tech Ventures",
    topic: "Le numérique, levier de transformation des PME",
  },
  {
    name: "M. Karim Sow",
    role: "Ministre de l'Économie (invité)",
    topic: "Réformes et climat des affaires",
  },
  {
    name: "Mme Claire Berthier",
    role: "Directrice Investissements, Choose Africa",
    topic: "Dossiers-Pays : méthodologie et opportunités",
  },
];

export const programme = [
  {
    time: "08:30",
    title: "Accueil & café networking",
    type: "Networking",
  },
  {
    time: "09:30",
    title: "Ouverture officielle du Sommet",
    type: "Plénière",
  },
  {
    time: "10:00",
    title: "Table ronde — L'Afrique centrale, nouveau frontier market",
    type: "Plénière",
  },
  {
    time: "11:15",
    title: "Focus Dossiers-Pays : Gabon & Congo",
    type: "Atelier",
  },
  {
    time: "12:30",
    title: "Déjeuner d'affaires & rendez-vous B2B",
    type: "Networking",
  },
  {
    time: "14:00",
    title: "Focus Dossiers-Pays : Cameroun, Bénin, Togo",
    type: "Atelier",
  },
  {
    time: "15:30",
    title: "Financement & garanties : les outils existants",
    type: "Plénière",
  },
  {
    time: "16:45",
    title: "Témoignages d'investisseurs & success stories",
    type: "Plénière",
  },
  {
    time: "18:00",
    title: "Cocktail de clôture",
    type: "Networking",
  },
];

export const magazineRubrics = [
  {
    name: "Leaders",
    desc: "Points de vue, analyses, portraits, entreprise du mois et personnalité marquante.",
    sub: ["Points de vue", "Analyses", "Portraits", "Entreprise du mois", "Personnalité marquante"],
  },
  {
    name: "Ressources",
    desc: "Matières premières, capitaux et finances.",
    sub: ["Matières premières", "Capitaux & finances"],
  },
  {
    name: "Exploits",
    desc: "De femmes et d'hommes, initiatives et entreprises.",
    sub: ["De femmes & d'hommes", "Initiatives & entreprises"],
  },
  {
    name: "Business",
    desc: "Appels d'offres, opportunités et projets.",
    sub: ["Appels d'offres", "Opportunités & projets"],
  },
];

export const articles = [
  {
    title: "Afrique centrale : la CEMAC accélère sur l'intégration économique",
    image: "/images/meeting.jpg",
    excerpt:
      "Les États membres harmonisent leurs réglementations pour faciliter la circulation des capitaux et des biens dans la sous-région.",
    category: "Analyses",
    date: "12 sept. 2026",
    readTime: "6 min",
  },
  {
    title: "Agro-industrie : le Bénin transforme son coton sur place",
    image: "/images/savanna.jpg",
    excerpt:
      "Une nouvelle politique de transformation locale redessine la chaîne de valeur du coton et crée des milliers d'emplois.",
    category: "Initiatives & entreprises",
    date: "08 sept. 2026",
    readTime: "5 min",
  },
  {
    title: "Port de Kribi : un hub logistique en pleine montée en charge",
    image: "/images/port.jpg",
    excerpt:
      "Capacité, connexions ferroviaires et zones franches : le port camerounais s'impose comme une porte d'entrée régionale.",
    category: "Opportunités & projets",
    date: "01 sept. 2026",
    readTime: "7 min",
  },
  {
    title: "Transition énergétique : le Gabon mise sur l'hydroélectricité",
    image: "/images/forest.jpg",
    excerpt:
      "Plusieurs projets d'envergure visent à électrifier les territoires tout en réduisant la dépendance aux énergies fossiles.",
    category: "Matières premières",
    date: "26 août 2026",
    readTime: "4 min",
  },
  {
    title: "Numérique : les fintechs d'Afrique de l'Ouest en pleine expansion",
    image: "/images/office.jpg",
    excerpt:
      "Paiements mobiles, crédit aux PME, assurance : le secteur fintech attire un volume record d'investissements.",
    category: "Capitaux & finances",
    date: "20 août 2026",
    readTime: "8 min",
  },
  {
    title: "Investir en Afrique : les garanties qui dérisquent les projets",
    image: "/images/handshake.jpg",
    excerpt:
      "Panorama des outils de garanties et d'assurances proposés aux investisseurs par les institutions financières.",
    category: "Points de vue",
    date: "15 août 2026",
    readTime: "6 min",
  },
];

export const portraits = [
  {
    name: "Mariam Touré",
    role: "Entrepreneure — Agro-industrie, Côte d'Ivoire",
    quote:
      "Transformer localement, c'est créer de la valeur durable pour nos communautés et nos territoires.",
  },
  {
    name: "Paul-Eric Ondo",
    role: "Investisseur — Infrastructures, Cameroun",
    quote:
      "L'Afrique n'est pas un risque à éviter, c'est une opportunité à comprendre.",
  },
  {
    name: "Sylvie Mensah",
    role: "Fondatrice — Fintech, Congo",
    quote:
      "Le numérique permet de sauter des étapes et d'inclure des millions d'usagers dans l'économie formelle.",
  },
];

export const partners = [
  { name: "Banque Africaine de Développement", tier: "Partenaire institutionnel" },
  { name: "CEMAC", tier: "Partenaire institutionnel" },
  { name: "Coface", tier: "Partenaire financier" },
  { name: "Bpifrance", tier: "Partenaire financier" },
  { name: "Chambre de Commerce Paris Île-de-France", tier: "Partenaire institutionnel" },
  { name: "Air France", tier: "Partenaire officiel" },
  { name: "TotalEnergies", tier: "Partenaire sponsor" },
  { name: "Orange", tier: "Partenaire sponsor" },
  { name: "Groupe ECOFIN", tier: "Média partenaire" },
  { name: "Jeune Afrique", tier: "Média partenaire" },
];

export const videos = [
  {
    title: "Choose Africa 2026 — Teaser officiel",
    image: "/images/conference.jpg",
    duration: "2:14",
    description: "Découvrez l'ambition et les temps forts du Sommet Choose Africa.",
  },
  {
    title: "Investir en Afrique centrale : la parole aux entrepreneurs",
    image: "/images/meeting.jpg",
    duration: "18:42",
    description: "Témoignages de chefs d'entreprise sur les opportunités et les réalités du terrain.",
  },
  {
    title: "Dossiers-Pays : méthodologie et opportunités",
    image: "/images/skyline.jpg",
    duration: "12:05",
    description: "Comment les Dossiers-Pays aident les investisseurs à cibler les secteurs porteurs.",
  },
  {
    title: "Table ronde — Financer la transition énergétique",
    image: "/images/audience.jpg",
    duration: "45:30",
    description: "Institutions financières et États débattent des solutions de financement.",
  },
];
