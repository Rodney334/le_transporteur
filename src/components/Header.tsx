import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <img
                src="assets/logo.png"
                alt="Le Transporteur"
                className="h-12"
              />
            </div>
          </Link>

          {/* Desktop: Langue + Menu centré */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Sélecteur de langue */}
            <button className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="w-5 h-5 rounded-sm overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2">
                  <rect width="3" height="2" fill="#FCD116" />
                  <rect width="3" height="1" fill="#E8112D" y="1" />
                  <rect width="1" height="2" fill="#008751" />
                </svg>
              </span>
              <span className="text-sm font-medium text-gray-800">BN</span>
              <ChevronDown size={18} className="text-gray-600" />
            </button>

            {/* Menu principal */}
            <nav className="flex items-center bg-white px-6 py-3 rounded-full space-x-8 text-gray-900 text-sm shadow">
              <Link
                href="/actualites"
                className="hover:text-orange-500 transition"
              >
                Actualités
              </Link>
              <Link
                href="/rejoignez-nous"
                className="hover:text-orange-500 transition"
              >
                Rejoignez–nous
              </Link>
              {/* <Link
                href="/devenir-partenaire"
                className="hover:text-orange-500 transition"
              >
                Devenir Partenaire
              </Link> */}
              {/* <Link href="/faq" className="hover:text-orange-500 transition">
                FAQ
              </Link> */}
              {/* <Link
                href="/contact"
                className="hover:text-orange-500 transition"
              >
                Contact
              </Link> */}
            </nav>
          </div>

          {/* Desktop: Boutons à droite */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-black font text-sm hover:opacity-80 transition">
              Se Connecter
            </button>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md text-sm hover:bg-orange-600 transition flex items-center space-x-2">
              <span>Commande Express</span>
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Mobile: Langue + Menu Hamburger */}
          <div className="flex lg:hidden items-center space-x-4">
            {/* Sélecteur de langue mobile */}
            <button className="flex items-center space-x-2 bg-white rounded-full p-2 shadow-sm">
              <span className="w-6 h-6 rounded-sm overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2">
                  <rect width="3" height="2" fill="#FCD116" />
                  <rect width="3" height="1" fill="#E8112D" y="1" />
                  <rect width="1" height="2" fill="#008751" />
                </svg>
              </span>
            </button>

            {/* Menu Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-orange-500 text-white p-3 rounded-full shadow-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a
              href="#"
              className="text-gray-900 hover:text-orange-500 transition py-2 border-b border-gray-100"
            >
              Actualités
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-orange-500 transition py-2 border-b border-gray-100"
            >
              Rejoignez–nous
            </a>
            {/* <a
              href="#"
              className="text-gray-900 hover:text-orange-500 transition py-2 border-b border-gray-100"
            >
              Devenir Partenaire
            </a> */}
            {/* <a
              href="#"
              className="text-gray-900 hover:text-orange-500 transition py-2 border-b border-gray-100"
            >
              FAQ
            </a> */}
            {/* <a
              href="#"
              className="text-gray-900 hover:text-orange-500 transition py-2 border-b border-gray-100"
            >
              Contact
            </a> */}
            <button className="text-gray-900 text-left hover:text-orange-500 transition py-2 border-b border-gray-100">
              Se Connecter
            </button>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md text-sm hover:bg-orange-600 transition w-full">
              Commande Express
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
