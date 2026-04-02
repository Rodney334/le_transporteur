import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [phone, setPhone] = useState<string | undefined>("");
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      setStatus({
        type: "error",
        message: "Le numéro de téléphone est requis.",
      });
      return;
    }

    setStatus({ type: "loading" });

    try {
      const response = await fetch(
        "https://backend.letrans-porteur.com/api/v1/formssubmition",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "contact",
            ...formData,
            phoneNumber: phone,
          }),
        },
      );

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Votre message a été envoyé avec succès !",
        });
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
        setPhone("");
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus({
          type: "error",
          message:
            errorData.message || "Une erreur est survenue lors de l'envoi.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Impossible de contacter le serveur. Veuillez réessayer plus tard.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#FD481A] text-white min-h-screen p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Colonne gauche - Texte et image */}
          <div className="space-y-6">
            <h3 className="md:text-4xl text-2xl font-bold leading-tight">
              CONTACTEZ-NOUS
            </h3>

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
          <form
            onSubmit={handleSubmit}
            className="bg-[#131313] rounded-3xl p-8 md:p-10 space-y-6"
          >
            <div className="space-y-5">
              {/* Nom et prénom */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Nom et Prénom(s)
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 bg-white"
                  placeholder="Ex: Jhon Dee"
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
                  onChange={setPhone}
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
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 bg-white"
                  placeholder="Ex: jhondee@gmail.com"
                />
              </div>

              {/* Objet */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Objet
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 bg-white"
                  placeholder="Ex: Prendre contact"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 resize-none bg-white"
                  placeholder="Écrivez votre message ici..."
                />
              </div>

              {/* Status Message */}
              {status.type !== "idle" && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : status.type === "error"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {status.type === "loading"
                    ? "Envoi en cours..."
                    : status.message}
                </div>
              )}

              {/* Bouton Soumettre */}
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full bg-[#FD481A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === "loading" ? "Chargement..." : "Soumettre"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
