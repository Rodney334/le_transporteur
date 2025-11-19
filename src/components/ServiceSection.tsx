import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { ServiceCardProps } from "@/types/serviceCardTypes";

const serviceList: ServiceCardProps[] = [
  {
    id: 1,
    titre: "LOGISTIQUE",
    description:
      "Entreposage et gestion de stock des produits de nos partenaires/Clients",
    cardImage: "/assets/livraison1.png",
    iconImage: "/assets/icone1.png",
  },
  {
    id: 2,
    titre: "TRANSPORT",
    description:
      "Livraison de colis ou repas d'un point à un autre avec possibilité de suivi de la commande",
    cardImage: "/assets/livraison2.png",
    iconImage: "/assets/icone2.png",
  },
  {
    id: 3,
    titre: "SERVICE POSTAL",
    description:
      "Distribution de courriers, factures ou tout autre type de document régi par l'Autorité de Régulation des Communications Électroniques et de la Poste (ARCEP) en République du BENIN par Décision N°2020-263/ARCEP/PT/SE/DAF/DEM/DJPC/BAP/GU du 03 Septembre 2020",
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
    <div className="bg-white flex flex-col justify-between border-2 border-black rounded-2xl shadow-md overflow-hidden w-full max-w-sm transition hover:shadow-xl h-full min-h-[400px]">
      {/* Section Titre - Toujours en haut */}
      <div className="px-6 pt-6 pb-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6 flex-shrink-0">
            <Image
              src={iconImage}
              alt="icône étoile"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {titre}
          </h3>
        </div>
      </div>

      {/* Section Description - Au milieu avec espace flexible */}
      <div className="px-6 py-4 flex-grow flex items-center">
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-5">
          {description}
        </p>
      </div>

      {/* Section Image - Toujours en bas */}
      <div className="relative w-full h-48 flex-shrink-0 mt-auto">
        <Image
          src={cardImage}
          alt={`Service ${titre}`}
          fill
          className="object-cover"
          priority={id === 1}
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
              key={item.id}
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
