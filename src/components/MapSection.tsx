import { mapCardTypes } from "@/types/mapCardTypes";
import { ArrowUpRight } from "lucide-react";

const partenaireCardList: mapCardTypes[] = [
  {
    id: 1,
    titre: "Bol'Art",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/share/17kFRMFpz4/",
  },
  {
    id: 2,
    titre: "Black Mix Food - BMF",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/share/17WomqU6xZ/",
  },
  {
    id: 3,
    titre: "Kotò",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/share/1HEFzLmQk7/",
  },
  {
    id: 4,
    titre: "MARCY'S BENIN",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/share/1JzHLbUNV1/",
  },
  {
    id: 5,
    titre: "CHEZ LES Tout-Petits",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "#",
  },
  {
    id: 6,
    titre: "Freshsalad229",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/share/15qSVW5CAG/",
  },
  {
    id: 7,
    titre: "ICare",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/share/16BkvhGWNq/",
  },
  {
    id: 8,
    titre: "FEEXPAY",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/share/17BxDbpjNY/",
  },
];

const PartenairesCard = ({ id, titre, icon, link }: mapCardTypes) => {
  return (
    <div className="flex items-center justify-between border border-black/20 rounded-lg px-4 py-4 bg-white">
      {/* Texte à gauche */}
      <div className="text-left">
        <p className="text-sm text-black">{titre}</p>
      </div>

      {/* Icône panier ronde à droite */}
      <div className="flex-shrink-0 ml-4">
        <div className="w-10 h-10 rounded-full bg-[#F2FCF9] flex items-center justify-center shadow-sm">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        </div>
      </div>
    </div>
  );
};

const MapSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conteneur général avec border noir */}
        <div className="flex flex-col md:flex-row border-2 border-black overflow-hidden rounded-2xl">
          {/* Image à gauche */}
          <div className="md:w-1/2 aspect-video">
            <img
              src="assets/map.png"
              alt="Carte"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bloc à droite */}
          <div className="md:w-1/2 bg-white text-white flex flex-col">
            {/* En-tête bleu (full width, arrondi en haut) */}
            <div className="flex items-center gap-3 bg-blue-300 text-black font-semibold text-xl px-6 py-4">
              <span className="text-red-500 text-lg">●</span>
              <h2 className="m-0">Partenaires</h2>
            </div>

            {/* Contenu — zone scrollable si besoin */}
            <div
              className="p-6 space-y-4"
              style={{ maxHeight: "calc(100% - 72px)" }}
            >
              {partenaireCardList.map((item, index) => (
                <PartenairesCard
                  key={index}
                  id={item.id}
                  titre={item.titre}
                  icon={item.icon}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
