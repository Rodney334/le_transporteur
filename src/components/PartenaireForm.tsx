import { useState } from "react";
import { Check } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    object: "",
    description: "",
  });
  const [phone, setPhone] = useState("");

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
        <h1 className="text-lg md:text-4xl text-center font-bold text-[#FD481A] mb-6">
          BOOSTER VOTRE PRODUCTIVITÉ
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-5">
          {/* Colonne gauche - Contenu */}
          <div className="space-y-8">
            {/* Liste des catégories */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#FD481A] flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#FD481A]" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  COMMERÇANTS
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#FD481A] flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#FD481A]" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">CORPORATE</h3>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#FD481A] flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#FD481A]" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  APPORTEURS D'AFFAIRES
                </h3>
              </div>
            </div>

            {/* Titre et description */}
            <div>
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
          </div>

          {/* Colonne droite - Formulaire */}
          <div>
            <div className="bg-[#131313] rounded-3xl p-8 md:p-10 space-y-6">
              {/* Nom et prénom */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Nom et Prénom(s)
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 text-base bg-white"
                  placeholder="Nom et prénom"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Téléphone
                </label>
                <PhoneInput
                  international
                  defaultCountry="BJ"
                  value={phone}
                  onCountryChange={(country) => {
                    console.log({ country });
                  }}
                  onChange={(e) => {
                    console.log({ value: e });
                  }}
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 bg-white"
                  placeholder="Ex: +229 00 00 00 00"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 text-base bg-white"
                  placeholder="Adresse E-mail"
                />
              </div>

              {/* Objet du partenariat */}
              {/* Objet */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Objet
                </label>
                <input
                  type="text"
                  name="objet"
                  value={formData.object}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 bg-white"
                  placeholder="Ex: Devenir partenaire d'affaire"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 resize-none bg-white"
                  placeholder="Description..."
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
