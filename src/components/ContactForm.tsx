import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Bénin",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Ajoutez ici votre logique de soumission
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#FD481A] p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Colonne gauche - Texte et image */}
          <div className="text-white space-y-6">
            <div className="text-sm tracking-wider uppercase">Contact</div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              contactez-nous
            </h1>

            <p className="text-base md:text-lg leading-relaxed max-w-xl">
              Une question sur votre commande ou besoin d'assistance ? Notre
              équipe est à votre écoute pour vous accompagner. Que ce soit pour
              suivre votre livraison, obtenir plus d'informations sur nos
              services ou partager vos remarques, n'hésitez pas à nous
              contacter. Remplissez le formulaire ci-dessous ou utilisez nos
              coordonnées, et nous vous répondrons dans les plus brefs délais.
            </p>

            {/* Image du livreur */}
            <div className="mt-8 pt-8">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/contact.png"
                  alt="Livreur LE TRANSPORTEUR"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="space-y-6">
            <div className="space-y-5">
              {/* Nom et prénom */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Nom et prénom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 bg-white"
                  placeholder="Ex: Jhon Dee"
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
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 bg-white"
                  placeholder="Ex: jhondee@gmail.com"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 bg-white"
                  placeholder="Ex: 00 00 00 00 00"
                />
              </div>

              {/* Pays */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Pays
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 appearance-none bg-white"
                >
                  <option>Bénin</option>
                  <option>France</option>
                  <option>Belgique</option>
                  <option>Suisse</option>
                  <option>Luxembourg</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 resize-none bg-white"
                  placeholder="Écrivez votre message ici..."
                />
              </div>

              {/* Bouton Soumettre */}
              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors text-base"
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

export default ContactForm;
