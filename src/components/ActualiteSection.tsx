import { ActualiteCardProps, ActualiteProps } from "@/types/actualiteCardTypes";
import Image from "next/image";
import Link from "next/link";

const ActualiteCard = ({
  titre,
  description,
  image,
  id,
}: ActualiteCardProps) => {
  return (
    <div className="bg-white border-2 border-black rounded-2xl shadow-md overflow-hidden w-full max-w-sm transition hover:shadow-xl flex flex-col h-[450px]">
      {/* Image - Hauteur fixe */}
      <div className="relative w-full h-48">
        <Image
          src={image as string}
          alt={titre}
          fill
          className="object-cover"
        />
      </div>

      {/* Titre - Hauteur fixe */}
      <div className="h-16 px-4 pt-4 flex items-center justify-center">
        <h3 className="text-lg font-semibold text-center line-clamp-2 leading-tight">
          {titre}
        </h3>
      </div>

      {/* Description - Hauteur flexible avec scroll si nécessaire */}
      <div className="flex-1 px-4 py-3 min-h-0">
        <p className="text-sm text-gray-700 leading-relaxed h-full overflow-y-auto">
          {description}
        </p>
      </div>

      {/* Bouton - Hauteur fixe en bas */}
      <div className="h-16 px-4 pb-4 flex items-center">
        <button className="w-full bg-[#F3F6F5] text-orange-700 px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-[#E8ECEB]">
          <Link href={`/actualite/${id}`} className="block w-full">
            Lire
          </Link>
        </button>
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
