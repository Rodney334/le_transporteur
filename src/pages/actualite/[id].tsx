import { Calendar, Users } from "lucide-react";
import { cardActualilteList } from "..";
import { useRouter } from "next/router";

export default function ActualiteDetail() {
  const router = useRouter();
  const { id } = router.query;

  const actualiteData = {
    auteur: "SEED GROUP",
    date: "21 octobre 2024",
    titre: "Partenariat Stratégique avec GAB Assurance",
    contenu: [
      "Ce Vendredi 18 Octobre 2024, Mr HODONOU Yannick Arife Vignon Manager du groupe SEED et Mr Gaston de Souza CEO de La Générale Des Assurances Du Bénin - GAB ont procédé à la signature d'un ACCORD DE PARTENARIAT, dans les locaux de l'assureur N°1 au BÉNIN.",
      "Cet accord matérialise la volonté des deux chefs d'entreprise de s'unir pour grandir ensemble.",
      "Il vise à promouvoir les offres du service de livraison LE TRANSPORTEUR auprès des clients de la GAB SA et à octroyer des réductions aux membres du programme GAB Fidelity.",
      "Nous partagerons avec vous, dans les prochains jours, les offres issues de notre collaboration, qui, nous l'espérons, feront le bonheur de nos clients respectifs.",
    ],
    hashtags: ["#seedgroup", "#gabassurance", "#collabo"],
    imageUrl:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop",
  };

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* En-tête */}
      <div className="bg-[#FD481A] text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Actualités SEED GROUP</h1>
          <p className="text-blue-100">
            Restez informés de nos dernières nouvelles
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Article Principal */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 hover:shadow-xl transition-shadow duration-300">
          {/* Métadonnées */}
          <div className="bg-gradient-to-r from-[#FD481A] to-[#FD481A] text-white px-8 py-6">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">{actualiteData.auteur}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{actualiteData.date}</span>
              </div>
            </div>
          </div>

          {/* Image principale */}
          <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-50">
            <img
              src={actualiteData.imageUrl}
              alt={actualiteData.titre}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <h2 className="absolute bottom-8 left-8 right-8 text-white text-3xl font-bold drop-shadow-lg">
              {actualiteData.titre}
            </h2>
          </div>

          {/* Contenu */}
          <div className="px-8 py-10">
            {actualiteData.contenu.map((paragraphe, index) => (
              <p
                key={index}
                className="text-gray-700 leading-relaxed mb-6 text-lg"
              >
                {paragraphe}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
