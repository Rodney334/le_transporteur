import HeroSection from "@/components/HeroSection";
import React, { useState } from "react";
import hero_img from "../../public/assets/hero_rejoignez.jpg";
import ContactForm from "@/components/ContactForm";
import PartenaireForm from "@/components/PartenaireForm";
import JoinForm from "@/components/JoinForm";

export default function RejoignezNous() {
  const [active, setActive] = useState("Nous contacter");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const titre = "Rejoignez-nous";
  const carouselImages = [0, 1, 2, 3, 4];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection image={hero_img} titre={titre} />

      {/* Navigation Tabs */}
      <section className="py-12 bg-white">
        <div className="flex justify-center mb-8">
          <div
            className="rounded-full px-2 py-1 flex items-center space-x-3"
            style={{ backgroundColor: "rgba(19,19,19,0.5)" }}
            role="tablist"
            aria-label="Public cible"
          >
            {["Nous contacter", "Nous Rejoindre", "Devenir Partenaire"].map(
              (label) => {
                const isActive = active === label;
                return (
                  <button
                    key={label}
                    onClick={() => setActive(label)}
                    role="tab"
                    aria-selected={isActive}
                    className={`
                      text-sm md:text-base px-4 md:px-6 py-2 rounded-full font-medium transition pointer cursor-pointer
                      ${
                        isActive
                          ? "bg-black text-white shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
                          : "text-white/90 hover:text-white"
                      }
                    `}
                  >
                    {label}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Form Content */}
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Nous Contacter */}
          {active === "Nous contacter" && <ContactForm />}

          {/* Nous Rejoindre */}
          {active === "Nous Rejoindre" && <JoinForm />}

          {/* Devenir Partenaire */}
          {active === "Devenir Partenaire" && <PartenaireForm />}
        </div>
      </section>
    </div>
  );
}
