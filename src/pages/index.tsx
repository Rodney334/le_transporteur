import React, { useState } from "react";
import { ArrowDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import hero_img from "../../public/assets/hero_img.jpg";

import HeroSection from "@/components/HeroSection";
import ScreenshotSection from "@/components/ScreenshotSection";
import ServiceSection from "@/components/ServiceSection";
import MapSection from "@/components/MapSection";
import AttributionSection from "@/components/AttributionSection";
import ActualiteSection from "@/components/ActualiteSection";
import FaqSection from "@/components/FaqSection";
import OrderSection from "@/components/OrderSection";
import { ActualiteCardProps } from "@/types/actualiteCardTypes";

export const cardActualilteList: ActualiteCardProps[] = [
  {
    id: 1,
    titre: "Entreprise Cliente",
    image: "/assets/storie1.png",
    description:
      "La négociation tarifaire est un vrai plus. Je peux discuter directement avec le livreur et trouver le meilleur prix pour mes envois réguliers.",
  },

  {
    id: 2,
    titre: "Client Particulier",
    image: "/assets/storie2.png",
    description:
      "Le suivi en temps réel m'a sauvé plusieurs fois. Je sais exactement où en est ma commande à tout moment.",
  },

  {
    id: 3,
    titre: "Partenaire Commercial",
    image: "/assets/storie3.png",
    description:
      "Interface simple, processus clair, et surtout la transparence totale sur les tarifs. C'est exactement ce qu'il nous fallait.",
  },
];

export default function LeTransporteur() {
  // const [active, setActive] = useState("Clients");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const titre = "LE TRANSPORTEUR";
  const sousTitre = `TRANSPORT- LOGISTIQUE - SERVICE POSTAL`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection titre={titre} image={hero_img} sousTitre={sousTitre} />

      {/* App Screenshots Section */}
      <ScreenshotSection />

      {/* Service Cards */}
      <ServiceSection />

      {/* Attribution section */}
      <AttributionSection />

      {/* Map Section */}
      <MapSection />

      {/* Actualité Section */}
      <ActualiteSection data={cardActualilteList} />
      {/* Faq and order Section */}
      <section className="bg-[#FD481A] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* FAQs & Reps Section - Single Container */}
          <FaqSection />

          {/* Commander Section - Rapproché */}
          <OrderSection />
        </div>
      </section>
    </div>
  );
}
