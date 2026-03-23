import { mapCardTypes } from "@/types/mapCardTypes";
import { ArrowUpRight } from "lucide-react";

const partenaireCardList: mapCardTypes[] = [
  {
    id: 1,
    titre: "Bol'Art",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/profile.php?id=100025078226957",
  },
  {
    id: 2,
    titre: "Black Mix Food",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/BMFOFFICIEL",
  },
  {
    id: 3,
    titre: "KÔTÔ",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/SAVONKOTO",
  },
  {
    id: 4,
    titre: "MARCY'S BENIN",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/Marcysfashionsstore",
  },
  {
    id: 5,
    titre: "FRESH SALAD",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/freshsalad229",
  },
  {
    id: 6,
    titre: "FEEXPAY",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/feexpay",
  },
  {
    id: 7,
    titre: "BABKI",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/babkishop",
  },
  {
    id: 8,
    titre: "LINA Accessories",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/POIDY229",
  },
  {
    id: 9,
    titre: "AriCare and Events",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/aricareandvents",
  },
  {
    id: 10,
    titre: "Des Bijoux et Moi",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/desbijouxetmoi",
  },
  {
    id: 11,
    titre: "VILLANELLE",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/myvillanelle",
  },
  {
    id: 12,
    titre: "IFÈ NUTRITION",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/IFENUTRITIONBIENETRE",
  },
  {
    id: 13,
    titre: "JERRY SINCLAIR",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/Jsaguenoukoun",
  },
  {
    id: 14,
    titre: "FENU STYLE",
    icon: <ArrowUpRight width={30} height={30} color="#FD481A" />,
    link: "https://www.facebook.com/fenustyle",
  },
];

const PartenairesCard = ({ id, titre, icon, link }: mapCardTypes) => {
  return (
    <div className="flex items-center justify-between border border-black/20 rounded-lg px-4 py-2.5 bg-white">
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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conteneur général avec border noir */}
        <div className="flex flex-col md:flex-row border-2 border-black overflow-hidden rounded-2xl h-auto md:h-[540px]">
          {/* Image à gauche */}
          <div className="md:w-1/2 h-[300px] md:h-full">
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
              className="p-6 space-y-4 overflow-y-auto h-[350px] md:h-full"
              style={{ maxHeight: "calc(100% - 64px)" }}
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
