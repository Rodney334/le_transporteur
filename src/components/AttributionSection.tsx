import Image from "next/image";

const AttributionSection = () => {
  return (
    <section className="bg-orange-600 text-white relative pb-20">
      {/* Attribution Section - Black Card */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-8">
        <div className="bg-black rounded-3xl p-12 relative overflow-hidden">
          {/* Content */}
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">Attribution</h3>
            <p className="text-gray-300 text-lg">
              Assignation automatique ou manuelle d'un livreur selon la zone
              géographique
            </p>
          </div>

          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/attribution.png"
              alt="Attribution illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-3 mb-6">
            <button className="w-10 h-10 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors">
              01
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 text-white font-semibold text-sm hover:bg-white/30 transition-colors">
              02
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 text-white font-semibold text-sm hover:bg-white/30 transition-colors">
              03
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 text-white font-semibold text-sm hover:bg-white/30 transition-colors">
              04
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 text-white font-semibold text-sm hover:bg-white/30 transition-colors">
              05
            </button>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-3">
            <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
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
            <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Title and Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Comment Ça
            <br />
            Marche – En 5 Étapes
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
