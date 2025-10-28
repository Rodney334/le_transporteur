import { useState } from "react";
import { ChevronDown } from "lucide-react";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Bénin",
    position: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Colonne gauche - Contenu */}
          <div className="space-y-8">
            {/* Titre et description */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#FD481A] mb-6">
                Faites partie de notre réseau
              </h1>
              <p className="text-gray-800 text-lg leading-relaxed">
                En nous rejoignant, vous intégrez une communauté dynamique où
                innovation, confiance et réussite commune sont au cœur de chaque
                action. Ensemble, allons plus loin et bâtissons un avenir
                prospère
              </p>
            </div>

            {/* Image d'équipe de livreurs */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="assets/img_re.png"
                alt="Équipe de livreurs"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FD481A] mb-8">
              Remplissez ce formulaire
            </h2>

            <div className="bg-gray-900 rounded-3xl p-8 md:p-10 space-y-6">
              {/* Nom et prénom */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 text-base bg-white"
                  placeholder="Nom et prénom"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 text-base bg-white"
                  placeholder="Adresse E-mail"
                />
              </div>

              {/* Téléphone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 text-base bg-white"
                  placeholder="N° de téléphone"
                />
              </div>

              {/* Pays avec drapeau */}
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3 pointer-events-none">
                  <span className="text-2xl">🇧🇯</span>
                  <span className="text-gray-700 text-base">Pays</span>
                </div>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full pl-32 pr-12 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 appearance-none bg-white text-base"
                >
                  <option value="Bénin">Bénin</option>
                  <option value="France">France</option>
                  <option value="Belgique">Belgique</option>
                  <option value="Suisse">Suisse</option>
                  <option value="Luxembourg">Luxembourg</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Je postule pour le poste de */}
              <div className="relative">
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full pl-6 pr-12 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-700 text-base bg-white"
                  placeholder="Je postule pour le poste de:"
                />
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Bouton Soumettre */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#FD481A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg mt-4"
              >
                Soumettre
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinForm;
