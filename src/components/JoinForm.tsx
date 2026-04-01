import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "Bénin",
    appliedPosition: "Coursier",
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
        "backend.letrans-porteur.com/api/v1/formssubmition",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "network_join",
            ...formData,
            phoneNumber: phone,
          }),
        },
      );

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Votre demande a été envoyée avec succès !",
        });
        setFormData({
          fullName: "",
          email: "",
          country: "Bénin",
          appliedPosition: "Coursier",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-lg md:text-4xl text-center font-bold text-[#FD481A] mb-6">
          FAITES PARTIE DE NOTRE RÉSEAU
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Colonne gauche - Contenu */}
          <div className="space-y-8">
            {/* Titre et description */}
            <div>
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
            <form
              onSubmit={handleSubmit}
              className="bg-[#131313] rounded-3xl p-8 md:p-10 space-y-6"
            >
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
                  className="w-full px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 text-base bg-white"
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
                  className="w-full px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 text-base bg-white"
                  placeholder="Adresse E-mail"
                />
              </div>

              {/* Pays avec drapeau */}
              <div className="relative">
                <label className="block text-white text-sm font-medium mb-2">
                  Pays
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-2 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 appearance-none bg-white text-base"
                >
                  <option value="Bénin">Bénin</option>
                  <option value="Togo">Togo</option>
                  <option value="Congo Brazaville">Congo Brazaville</option>
                </select>
                <ChevronDown className="absolute right-6 top-12 w-6 h-6 text-gray-400 pointer-events-none" />
              </div>

              {/* Je postule pour le poste de */}
              <div className="relative">
                <label className="block text-white text-sm font-medium mb-2">
                  Je postule pour le poste de....
                </label>
                <select
                  name="appliedPosition"
                  value={formData.appliedPosition}
                  onChange={handleChange}
                  className="w-full px-2 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 appearance-none bg-white text-base"
                >
                  <option value="Coursier">Coursier</option>
                  <option value="Coursier Freelance">Coursier Freelance</option>
                  <option value="Chef Parc">Chef Parc</option>
                  <option value="Business Developper">
                    Business Developper
                  </option>
                  <option value="Commercial">Commercial</option>
                  <option value="Assistant RH">Assistant RH</option>
                </select>
                <ChevronDown className="absolute right-6 top-12 w-6 h-6 text-gray-400 pointer-events-none" />
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinForm;
