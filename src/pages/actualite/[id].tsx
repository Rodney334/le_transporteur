import { Calendar, Users } from "lucide-react";
import { useRouter } from "next/router";
import { actualites } from "@/data/actualites";

export default function ActualiteDetail() {
  const router = useRouter();
  const { id } = router.query;

  const actualiteData = actualites.find((a) => a.id === Number(id));

  if (!actualiteData) {
    return (
      <div className="mt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Actualité introuvable</h1>
          <p className="text-gray-600 mt-2">Désolé, cette actualité n'existe pas ou a été supprimée.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 min-h-screen bg-gray-50 flex flex-col">
      {/* En-tête simple */}
      <div className="bg-[#FD481A] text-white py-6 shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Actualités SEED GROUP</h1>
            <p className="text-orange-100 text-sm">Restez informés de nos dernières nouvelles</p>
          </div>
          <button 
            onClick={() => router.back()}
            className="text-white hover:text-orange-200 transition-colors text-sm font-medium flex items-center gap-2"
          >
            ← Retour
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
        <div className="max-w-7xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row lg:h-[calc(100vh-220px)] min-h-[600px]">
          
          {/* Section Gauche : Image et Tags */}
          <div className="lg:w-1/2 flex flex-col bg-gray-50 border-r border-gray-100">
            <div className="flex-1 relative p-6 lg:p-10 flex items-center justify-center min-h-[350px] lg:min-h-0">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner bg-white flex items-center justify-center p-4">
                <img
                  src={actualiteData.imageUrl}
                  alt={actualiteData.titre}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            
            {/* Tags en bas de l'image */}
            <div className="px-10 pb-10">
              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
                {actualiteData.hashtags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-white text-[#FD481A] rounded-full text-sm font-semibold shadow-sm border border-orange-50 hover:bg-orange-50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section Droite : Contenu scrollable */}
          <div className="lg:w-1/2 flex flex-col h-full bg-white">
            {/* Métadonnées fixes en haut */}
            <div className="p-8 lg:p-12 pb-4 lg:pb-6">
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 bg-gray-50 w-fit px-4 py-2 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FD481A]" />
                  <span className="font-medium text-gray-700">{actualiteData.auteur}</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FD481A]" />
                  <span className="text-gray-600">{actualiteData.date}</span>
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-[1.2] tracking-tight">
                {actualiteData.titre}
              </h2>
            </div>

            {/* Zone de texte scrollable */}
            <div className="flex-1 overflow-y-auto px-8 lg:px-12 pb-12 custom-scrollbar">
              <div className="space-y-6">
                {actualiteData.contenu.map((paragraphe, index) => (
                  <p
                    key={index}
                    className="text-gray-700 leading-[1.8] text-lg lg:text-xl font-light"
                  >
                    {paragraphe}
                  </p>
                ))}
              </div>
              
              {/* Note de fin ou CTA optionnel */}
              <div className="mt-12 p-8 bg-orange-50 rounded-3xl border border-orange-100">
                <p className="text-[#FD481A] font-semibold text-center italic">
                  Suivez-nous pour plus d'actualités sur nos services et partenariats.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #FD481A;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #e03d15;
        }
      `}</style>
    </div>
  );
}
