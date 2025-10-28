import { HeroPropsType } from "@/types/heroSectionTypes";
import Image from "next/image";

const HeroSection = ({ image, titre, sousTitre }: HeroPropsType) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image as string}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

      {/* Contenu */}
      <div className="relative z-10 text-center w-full px-4">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
          {titre}
        </h1>
        <p className="text-base md:text-xl text-white mb-8 max-w-2xl mx-auto">
          {sousTitre}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
