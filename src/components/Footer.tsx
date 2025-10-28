const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="flex items-start lg:items-center justify-between mb-6 flex-col lg:flex-row gap-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">✦</span>
              <h3 className="text-3xl font-bold">Simple & Rapide</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Abonnez-vous à notre newsletter
            </p>
            <img
              src="assets/sac.png"
              alt="Newsletter icon"
              className="w-16 h-16"
            />
          </div>

          <div className="flex items-center border-b border-gray-700 pb-2">
            <input
              type="email"
              placeholder="letransporteur@email.com"
              className="bg-transparent flex-1 outline-none text-gray-400"
            />
            <button className="text-purple-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div>
            <img
              src="assets/logo_white.png"
              alt="Le Transporteur"
              className="mb-4"
            />
          </div>

          {/* Liens Utiles */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-500">
              LIENS UTILES
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Clients</li>
              <li className="hover:text-white cursor-pointer">Vendeurs</li>
              <li className="hover:text-white cursor-pointer">Coursiers</li>
              <li className="hover:text-white cursor-pointer">Terms of Use</li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-500">SERVICES</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">
                Courrier Express
              </li>
              <li className="hover:text-white cursor-pointer">
                Livraison Colis
              </li>
              <li className="hover:text-white cursor-pointer">
                Transport Logistique
              </li>
              <li className="hover:text-white cursor-pointer">
                Négociation Tarifaire
              </li>
              <li className="hover:text-white cursor-pointer">
                Suivi Temps Réel
              </li>
            </ul>
          </div>

          {/* Liens Utiles 2 */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-500">
              LIENS UTILES
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Actualités</li>
              <li className="hover:text-white cursor-pointer">
                Devenir Partenaire
              </li>
              <li className="hover:text-white cursor-pointer">
                Nous Rejoindre
              </li>
              <li className="hover:text-white cursor-pointer">À Propos</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Se connecté</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button className="border border-gray-700 rounded-lg py-3 flex items-center justify-center space-x-2 hover:border-gray-500 transition">
            <span>✦</span>
            <span className="text-sm">Twitter</span>
          </button>
          <button className="border border-gray-700 rounded-lg py-3 flex items-center justify-center space-x-2 hover:border-gray-500 transition">
            <span className="text-pink-500">📷</span>
            <span className="text-sm">Instagram</span>
          </button>
          <button className="border border-gray-700 rounded-lg py-3 flex items-center justify-center space-x-2 hover:border-gray-500 transition">
            <span className="text-blue-500">f</span>
            <span className="text-sm">Facebook</span>
          </button>
          <button className="border border-gray-700 rounded-lg py-3 flex items-center justify-center space-x-2 hover:border-gray-500 transition">
            <span className="text-orange-500">in</span>
            <span className="text-sm">LinkedIn</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          © Tous Droits Réservés 2025 LE TRANSPORTEUR BJ
        </div>
      </div>
    </footer>
  );
};

export default Footer;
