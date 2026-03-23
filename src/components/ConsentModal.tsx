import { useState, useEffect } from "react";

const ConsentModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("consentAccepted="));
    if (!consent) {
      setShow(true);
      // Prevent scrolling while modal is open
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAccept = () => {
    document.cookie = "consentAccepted=true; max-age=31536000; path=/";
    setShow(false);
    // Restore scrolling
    document.body.style.overflow = "auto";
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 max-w-2xl w-full shadow-2xl relative overflow-hidden scale-in">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16" />
        
        <div className="relative text-center lg:text-left">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Prise de connaissance obligatoire
          </h2>
          
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-10">
            <p>
              Bienvenue sur la plateforme <strong>Le Transporteur</strong>. Pour continuer, vous devez accepter nos{" "}
              <a 
                href="/docs/2- CONDITIONS GENERALES.pdf" 
                target="_blank" 
                className="text-orange-600 font-bold underline decoration-2 underline-offset-4 hover:text-orange-700 transition-colors"
              >
                Conditions Générales d'Utilisation
              </a>.
            </p>
            <p>
              Nous utilisons des <strong>cookies</strong> pour vous offrir une expérience optimale et sécurisée sur notre application.
            </p>
            <div className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100 mt-6">
              <p className="text-sm text-orange-800 font-medium">
                En cliquant sur le bouton ci-dessous, vous validez votre consentement éclairé à l'utilisation de vos données selon nos politiques de confidentialité.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button
              onClick={handleAccept}
              className="w-full lg:w-fit px-12 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black text-lg rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-200"
            >
              J'ACCEPTE LES CONDITIONS
            </button>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
               <a href="/docs/1- MENTIONS LEGALES.pdf" target="_blank" className="hover:text-orange-600 transition-colors">Mentions Légales</a>
               <span className="hidden sm:inline opacity-30">•</span>
               <a href="/docs/3- POLITIQUES DE CONFIDENTIALITE.pdf" target="_blank" className="hover:text-orange-600 transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .scale-in {
          animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ConsentModal;
