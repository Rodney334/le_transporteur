import React, { useState } from "react";
import { ArrowDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import hero_img from "../../public/assets/hero_actualite.png";
import ActualiteSection from "@/components/ActualiteSection";
import { ActualiteCardProps } from "@/types/actualiteCardTypes";
import FaqSection from "@/components/FaqSection";

import { actualites } from "@/data/actualites";

export default function LeTransporteur() {
  const [active, setActive] = useState("Clients"); // "Clients" sélectionné par défaut
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const titre = "Actualité";
  const carouselImages = [0, 1, 2, 3, 4];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const faqs = [
    {
      question: "Morem ipsum dolor ?",
      answer: "Sorem ipsum dolor sit amet, consectetur adipiscing elit ?",
    },
    {
      question: "Porem ipsum dolor sit amet, consectetur ?",
      answer: "",
    },
    {
      question: "Norem ipsum dolor sit amet ?",
      answer: "",
    },
    {
      question: "Corem ipsum dolor sit amet ?",
      answer: "",
    },
    {
      question: "Vorem ipsum dolor ?",
      answer: "",
    },
    {
      question: "Gorem ipsum ?",
      answer: "",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection image={hero_img} titre={titre} />
      <section
        id="services"
        className="py-24 text-gray-300 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* --- Titre principal --- */}
          <div className="flex justify-center gap-4 mb-12">
            <p className="text-xl lg:text-xl font-bold text-orange-500">
              Actualités
            </p>
          </div>
          <div className="flex justify-center gap-4 mb-12">
            <h2 className="text-5xl lg:text-5xl font-bold text-black">
              Nos actualités récentes
            </h2>
          </div>
          <ActualiteSection data={actualites} />
          <div className="grid md:grid-cols-3 gap-8"></div>
        </div>
      </section>
      {/* Faq and order Section */}
      <section className="bg-[#FD481A] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* FAQs & Reps Section - Single Container */}
          <FaqSection />
        </div>
      </section>
    </div>
  );
}
