import { Actualite } from "@/types/actualite";

export const actualites: Actualite[] = [
  {
    id: 1,
    auteur: "Le transporteur",
    date: "21 octobre 2024",
    titre: "Partenariat Stratégique avec GAB Assurance",
    contenu: [
      "Ce Vendredi 18 Octobre 2024, Mr HODONOU Yannick Arife Vignon Manager du groupe SEED et Mr Gaston de Souza CEO de La Générale Des Assurances Du Bénin - GAB ont procédé à la signature d'un ACCORD DE PARTENARIAT, dans les locaux de l'assureur N°1 au BÉNIN.",
      "Cet accord matérialise la volonté des deux chefs d'entreprise de s'unir pour grandir ensemble.",
      "Il vise à promouvoir les offres du service de livraison LE TRANSPORTEUR auprès des clients de la GAB SA et à octroyer des réductions aux membres du programme GAB Fidelity.",
      "Nous partagerons avec vous, dans les prochains jours, les offres issues de notre collaboration, qui, nous l'espérons, feront le bonheur de nos clients respectifs.",
    ],
    hashtags: ["#seedgroup", "#gabassurance", "#collabo"],
    imageUrl: "/assets/actualites/actualite_01.jpg", // "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    auteur: "Le transporteur",
    date: "26 septembre 2024",
    titre: "Conformité APDP : Protection de vos Données",
    contenu: [
      "Nous avons le plaisir de vous annoncer que SEED BENIN SAS a obtenu ses numéros de conformité, délivrés par l'Agence de Protection des Données à caractère Personnel (APDP).",
      "Lesdits numéros prouvent notre engagement à nous conformer aux législations en vigueur dans chaque pays où nous intervenons et à protéger les informations sensibles que nous manipulons dans le cadre de nos rapports avec nos clients et partenaires :",
      "- notre site web www.letrans-porteur.com est déclaré conforme par Extrait de Délibération N°2024-209/AT/APDP/DST/SC du 26 Septembre 2024 ;",
      "- notre Application Mobile Le Transporteur (disponible sur Playstore et Apple Store) est déclarée conforme par Extrait de Délibération N°2024-207/AT/APDP/DST/SC du 26 Septembre 2024.",
      "Cette conformité vise à garantir la protection des informations des visiteurs et/ou utilisateurs de nos différentes plateformes et renforcer la sécurité des données de nos clients.",
    ],
    hashtags: ["#SEEDBENIN", "#APDP", "#Conformité", "#ProtectionDonnées"],
    imageUrl: "/assets/actualites/actualite_02.png",
  },
];
