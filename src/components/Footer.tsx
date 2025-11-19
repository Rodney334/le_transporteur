import Link from "next/link";
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

          {/* A propos */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-500">A PROPOS</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">
                <Link href={`/rejoignez-nous`}>Contact</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a
                  href="/docs/2- MENTIONS LÉGALES - Site (New).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mentions Légales
                </a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a
                  href="/docs/3- POLITIQUES DE CONFIDENTIALITÉ.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Politique de Confidentialité
                </a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a
                  href="/docs/4- CONDITIONS GÉNÉRALES.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conditions Générales de Vente (CGV)
                </a>
              </li>
            </ul>
          </div>

          {/* Liens Utiles */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-500">
              LIENS UTILES
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Livreurs</li>
              <li className="hover:text-white cursor-pointer">Actualités</li>
              <li className="hover:text-white cursor-pointer">DGI Bénin</li>
              <li className="hover:text-white cursor-pointer">APDP Bénin</li>
            </ul>
          </div>

          {/* RÉSEAUX SOCIAUX */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-500">
              RÉSEAUX SOCIAUX
            </h4>
            <div className="flex flex-row gap-4">
              {/* Twitter */}
              <a
                target="_blank"
                href=" https://twitter.com/transportbyseed"
                className="hover:text-white text-gray-400 transition-colors"
              >
                {/* <Twitter className="w-5 h-5" /> */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  />
                </svg>
              </a>

              {/* FaceBook */}
              <a
                target="_blank"
                href="https://m.facebook.com/transportbyseed"
                className="hover:text-white text-gray-400 transition-colors"
              >
                {/* <Facebook className="w-5 h-5" /> */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                target="_blank"
                href="https://www.instagram.com/transportbyseed"
                className="hover:text-white text-gray-400 transition-colors"
              >
                {/* <Instagram className="w-5 h-5" /> */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.5 6h-5M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 17a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                target="_blank"
                href="https://www.linkedin.com/company/transportbyseed"
                className="hover:text-white text-gray-400 transition-colors"
              >
                {/* <Linkedin className="w-5 h-5" /> */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                target="_blank"
                href="https://www.tiktok.com/@transportbyseed"
                className="hover:text-white text-gray-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 113.183-4.51v-3.5a6.329 6.329 0 105.608 6.145 6.33 6.33 0 003.771-11.356z" />
                </svg>
              </a>

              {/* Youtube */}
              <a
                target="_blank"
                href="https://www.youtube.com/@transportbyseed"
                className="hover:text-white text-gray-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
        </div> */}

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          Copyright ©️ 2025 SEED BENIN SAS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
