import { useState } from "react";
import Image from "next/image";

const attributionSteps = [
  {
    id: 1,
    title: "Attribution",
    description:
      "Assignation automatique ou manuelle d'un livreur selon la zone géographique",
    image: "/assets/attribution/en_attente.png",
  },
  {
    id: 2,
    title: "Négociation",
    description:
      "Échanges et discussion tarifaire entre le client et le livreur pour convenir d'un prix",
    image: "/assets/attribution/en_discussion_tarifaire.png",
  },
  {
    id: 3,
    title: "Validation",
    description:
      "Le prix est validé, les fonds sont sécurisés et la course peut démarrer en toute confiance",
    image: "/assets/attribution/prix_valide.png",
  },
  {
    id: 4,
    title: "Litige",
    description:
      "En cas de désaccord persistant, un litige peut être ouvert pour demander une médiation",
    image: "/assets/attribution/en_conflit.png",
  },
  {
    id: 5,
    title: "Médiation",
    description:
      "L'administration intervient comme arbitre pour résoudre le conflit de manière équitable",
    image: "/assets/attribution/arbitre_admin.png",
  },
];

const AttributionSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % attributionSteps.length);
  };

  const prevStep = () => {
    setCurrentStep(
      (prev) => (prev - 1 + attributionSteps.length) % attributionSteps.length,
    );
  };

  const activeStep = attributionSteps[currentStep];

  return (
    <section className="bg-orange-600 text-white relative pb-20">
      {/* Attribution Section - Black Card */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-8">
        <div className="bg-black rounded-3xl p-12 relative overflow-hidden min-h-[500px] flex flex-col justify-between">
          <div>
            {/* Content */}
            <div className="text-center mb-8 transition-all duration-500 transform">
              <h3 className="text-4xl font-bold mb-4">{activeStep.title}</h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {activeStep.description}
              </p>
            </div>

            {/* Illustration */}
            <div className="flex justify-center mb-8 h-80 lg:h-96 items-center">
              <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px] transition-all duration-500 transform">
                <Image
                  key={activeStep.image}
                  src={activeStep.image}
                  alt={activeStep.title}
                  fill
                  className="object-contain animate-fadeIn"
                />
              </div>
            </div>
          </div>

          <div>
            {/* Step Indicators */}
            <div className="flex justify-center gap-3 mb-6">
              {attributionSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 ${
                    currentStep === index
                      ? "bg-white text-black scale-110 shadow-lg"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  0{step.id}
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-3">
              <button
                onClick={prevStep}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all active:scale-95"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextStep}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all active:scale-95"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Title and Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Comment Ça
            <br />
            Marche - En 5 Étapes
          </h2>
          <p className="text-lg max-w-md">
            Une plateforme complète pour tous vos besoins logistiques avec
            négociation tarifaire et suivi en temps réel
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 rounded-lg px-6 py-4 backdrop-blur-sm">
            <p className="text-sm font-medium">+ 30.000 Courses effectuées</p>
          </div>
          <div className="bg-white/10 rounded-lg px-6 py-4 backdrop-blur-sm">
            <p className="text-sm font-medium">+ 5 années d'expériences</p>
          </div>
          <div className="bg-white/10 rounded-lg px-6 py-4 backdrop-blur-sm">
            <p className="text-sm font-medium">+ 8 villes desservies</p>
          </div>
          <div className="bg-white/10 rounded-lg px-6 py-4 backdrop-blur-sm">
            <p className="text-sm font-medium">+ 1.000 Clients</p>
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="relative flex items-end justify-center gap-4 overflow-x-auto pb-8">
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/phone1.png"
              alt="Product Owner"
              width={280}
              height={560}
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/phone2.png"
              alt="Country Manager"
              width={280}
              height={560}
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/phone3.png"
              alt="Nutritionniste"
              width={280}
              height={560}
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/phone4.png"
              alt="Sales Manager"
              width={280}
              height={560}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttributionSection;
