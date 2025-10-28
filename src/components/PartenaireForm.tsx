import { useState } from "react";
import { Check } from "lucide-react";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    object: "",
    description: "",
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
                Productivité boostée
              </h1>
              <p className="text-gray-800 text-lg leading-relaxed">
                Vous avez un produit innovant que vous souhaitez distribuer, un
                projet de collaboration que vous voulez nous soumettre ? Vous
                êtes au bon endroit...
              </p>
            </div>

            {/* Image d'équipe */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/assets/partenaire.png"
                alt="Équipe"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Liste des catégories */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-[#FD481A] flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#FD481A]" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Commenrçants
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-[#FD481A] flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#FD481A]" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Corporate</h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-[#FD481A] flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#FD481A]" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Apporteurs d'Affaires
                </h3>
              </div>
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
                  className="w-full px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 bg-white text-base"
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

              {/* Objet du partenariat */}
              <div>
                <input
                  type="text"
                  name="object"
                  value={formData.object}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 text-base bg-white"
                  placeholder="Objet du partenariat"
                />
              </div>

              {/* Description */}
              <div>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 resize-none text-base bg-white"
                  placeholder="Description"
                />
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
