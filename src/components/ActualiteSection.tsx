import { ActualiteCardProps, ActualiteProps } from "@/types/actualiteCardTypes";
import Image from "next/image";

const ActualiteCard = ({
  titre,
  description,
  image,
  id,
}: ActualiteCardProps) => {
  const seeMore = (id: string | number) => {
    console.log(id);
  };
  return (
    <div className="bg-white border-2 border-black rounded-2xl shadow-md overflow-hidden w-full max-w-sm transition hover:shadow-xl">
      {/* Contenu haut */}
      <div className="relative w-full h-48">
        <Image
          src={image as string}
          alt="Transport Rapide"
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-black text-center mt-3">
        {titre}
      </h3>
      <div className="p-4">
        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      </div>
      <div className="bg-white text-center">
        <div className="px-4 mb-2">
          <button
            onClick={() => seeMore(id)}
            className="w-full bg-[#F3F6F5] text-orange-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Voir Plus
          </button>
        </div>
      </div>
    </div>
  );
};

const ActualiteSection = ({ data }: ActualiteProps) => {
  return (
    <section
      id="services"
      className="py-24 text-gray-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Titre principal --- */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-5xl lg:text-5xl font-bold text-black">
            Actualités
          </h2>
          <div className="relative w-18 h-18">
            <Image
              src="/assets/pasta.png"
              alt="Pizza icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Carte */}
          {data.map((item, index) => (
            <ActualiteCard
              key={index}
              description={item.description}
              image={item.image}
              titre={item.titre}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActualiteSection;
