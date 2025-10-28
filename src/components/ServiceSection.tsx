import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { ServiceCardProps } from "@/types/serviceCardTypes";

const serviceList: ServiceCardProps[] = [
  {
    id: 1,
    titre: "Courrier Express",
    description:
      "Envoi et réception de documents avec suivi GPS en temps réel et négociation tarifaire flexible.",
    cardImage: "/assets/livraison1.png",
    iconImage: "/assets/icone1.png",
  },
  {
    id: 2,
    titre: "Livraison Colis",
    description:
      "Transport sécurisé de vos colis avec validation tarifaire par double saisie client-livreur.",
    cardImage: "/assets/livraison2.png",
    iconImage: "/assets/icone2.png",
  },
  {
    id: 3,
    titre: "Transport Logistique",
    description:
      "Solutions complètes de transport à domicile avec gestion automatisée et facturation intégrée.",
    cardImage: "/assets/livraison3.png",
    iconImage: "/assets/icone3.png",
  },
];

const ServiceCard = ({
  iconImage,
  cardImage,
  description,
  titre,
  id,
}: ServiceCardProps) => {
  return (
    <div className="bg-white border-2 border-black rounded-2xl shadow-md overflow-hidden w-full max-w-sm transition hover:shadow-xl">
      {/* Contenu haut */}
      <div className="p-6">
        {/* Etoile + titre */}
        <div className="flex items-center gap-2 mb-3">
          <div className="relative w-5 h-5">
            <Image
              src={iconImage} // ton image étoile
              alt="icône étoile"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{titre}</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

        {/* Lien En savoir plus */}
        <button className="flex items-center mt-6 gap-2 text-sm font-medium text-gray-900 hover:underline">
          EN SAVOIR PLUS
        </button>
      </div>

      {/* Image du bas (pleine largeur) */}
      <div className="relative w-full h-48">
        <Image
          src={cardImage} // ton image réelle
          alt="Transport Rapide"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section
      id="services"
      className="py-24 text-gray-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Titre principal --- */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 flex justify-center items-center gap-3">
            Nos Services Digitalisés
            <ArrowDown className="w-8 h-8 text-gray-200" />
          </h2>
        </div>

        {/* --- Cartes de services --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {serviceList.map((item, index) => (
            <ServiceCard
              key={index}
              id={item.id}
              iconImage={item.iconImage}
              cardImage={item.cardImage}
              description={item.description}
              titre={item.titre}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
