import { useState } from "react";

interface FaqData {
  id: number;
  content: string;
}

const questions: FaqData[] = [
  {
    id: 1,
    content: "Que faites vous ?",
  },
  {
    id: 2,
    content: "Dans quel pays êtes vous ?",
  },
  {
    id: 3,
    content: "Quels sont vos tarifs ?",
  },
  {
    id: 4,
    content: "Comment faire appel à vos services ?",
  },
  {
    id: 5,
    content: "Qui contacter en cas de plainte ?",
  },
  {
    id: 6,
    content: "Quels sont les différents types de paiement disponibles ?",
  },
];

const responses: FaqData[] = [
  {
    id: 1,
    content:
      "Nous livrons des colis, des courriers et des repas par le biais de plusieurs modes de transport (moto, voiture, etc.).",
  },
  {
    id: 2,
    content:
      "Pour l'instant, nous sommes présent au BÉNIN, au TOGO et au CONGO (Brazzaville).",
  },
  {
    id: 3,
    content:
      "Ils varient en fonction de la distance, du poids, de la quantité et du mode de transport.",
  },
  {
    id: 4,
    content: "Cliquez sur l'onglet « Passer votre commande »",
  },
  {
    id: 5,
    content:
      "Cliquez sur l'onglet « Contact » et remplissez le formulaire en inscrivant PLAINTE en objet ou contactez directement le Service Client via WhatsApp.",
  },
  {
    id: 6,
    content: "Nous acceptons les paiements en via Mobile Money et Carte VISA.",
  },
];

const FaqSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleQuestionClick = (id: number) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  const handleCloseResponse = () => {
    setSelected(null);
  };

  const selectedResponse = responses.find((r) => r.id === selected);

  return (
    <div className="bg-white rounded-3xl p-8 mb-8 mx-0 lg:mx-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FAQs Section */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-6">FAQs.</h2>
          <div className="space-y-3">
            {questions.map((item) => (
              <button
                key={item.id}
                className={`w-full text-start transition-all duration-300 ${
                  selected === item.id
                    ? "bg-gray-900 text-white p-4 rounded-lg transform scale-[1.02]"
                    : "border border-gray-300 rounded-lg p-3 bg-white text-orange-500 text-sm cursor-pointer hover:border-orange-300 hover:bg-gray-50"
                }`}
                onClick={() => handleQuestionClick(item.id)}
              >
                <p className="font-medium">{item.content}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Reps Section */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Réponses.</h2>
          {selectedResponse && (
            <div className="bg-gray-900 text-white rounded-2xl p-6 relative transition-all duration-300 animate-fadeIn">
              {/* Bouton fermer avec animation simple */}
              <button
                onClick={handleCloseResponse}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-all duration-200 hover:rotate-90 transform"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <p className="text-gray-300 leading-relaxed text-sm pr-8 transition-opacity duration-300">
                {selectedResponse.content}
              </p>
            </div>
          )}

          {/* Message quand aucune réponse n'est sélectionnée */}
          {!selectedResponse && (
            <div className="bg-gray-100 rounded-2xl p-6 text-center transition-all duration-300">
              <p className="text-gray-500 text-sm">
                Sélectionnez une question pour voir la réponse
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
