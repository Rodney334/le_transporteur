import { useState } from "react";

const ScreenshotSection = () => {
  const [active, setActive] = useState("Clients"); // "Clients" sélectionné par défaut
  return (
    <section className="py-20 bg-white">
      {/* Boutons "Clients | Vendeurs | Coursiers" */}
      <div className="flex justify-center mb-8">
        <div
          className="rounded-full px-2 py-1 flex items-center space-x-3"
          style={{ backgroundColor: "rgba(19,19,19,0.5)" }}
          role="tablist"
          aria-label="Public cible"
        >
          {["Clients", "Vendeurs", "Coursiers"].map((label) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                role="tab"
                aria-selected={isActive}
                className={
                  "text-sm md:text-base px-6 py-2 rounded-full font-medium transition " +
                  (isActive
                    ? "bg-black text-white shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
                    : "text-white/90 hover:text-white")
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Texte centré - Desktop uniquement */}
        <div className="hidden md:block text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prêt à Digitaliser Vos Livraisons ?
          </h2>
          <p className="text-lg text-gray-600">
            Commandez plus facilement grâce à notre plateforme
          </p>
          {/* <p className="text-lg text-gray-600">
              Téléchargez l'application et commencez à profiter de nos services
            </p> */}
        </div>

        {/* Desktop: 3 images côte à côte */}
        <div className="hidden md:flex justify-center items-end gap-8">
          <div className="w-64">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/assets/screenApp1.png"
                alt="Screenshot App 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-72 transform scale-110">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/assets/screenApp2.png"
                alt="Screenshot App 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-64">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/assets/screenApp3.png"
                alt="Screenshot App 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile: Texte + Image + Boutons */}
        <div className="md:hidden">
          {/* Titre mobile */}
          <div className="text-center mb-6 px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
              Prêt à Digitaliser Vos
              <br />
              Livraisons ?.
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Rejoignez les milliers de clients qui font confiance à notre
              plateforme pour leurs besoins logistiques.
            </p>
          </div>

          {/* Boutons de téléchargement */}
          <div className="flex justify-center gap-4 mb-8 px-4">
            <button className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
              <span className="text-xl">▶</span>
            </button>
            <button className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
              <span className="text-xl">🍎</span>
            </button>
          </div>

          {/* Image du téléphone */}
          <div className="flex justify-center px-4">
            <div className="w-64">
              <img
                src="/assets/screenApp2.png"
                alt="Screenshot App"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;
