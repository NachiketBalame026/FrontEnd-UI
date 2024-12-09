import React from "react";

const Footer = () => (
  <footer className="bg-white-800 text-white p-6 mt-10 relative">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Logo Section */}
      <div>
        <img src="./logo.png" alt="Logo" className="mb-4" />
      </div>

      {/* Infos Pratiques Section */}
      <div className="text-black">
        <h3 className="font-bold mb-2">INFOS PRATIQUES</h3>
        <ul>
          <li>
            <a href="#" className="hover:underline">
              À propos
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Livraisons & Retours
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Modes d'emploi
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      {/* Légal Section */}
      <div className="text-black">
        <h3 className="font-bold mb-2">LÉGAL</h3>
        <ul>
          <li>
            <a href="#" className="hover:underline">
              Mentions légales
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              CGU
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              CGV
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Politique de confidentialité
            </a>
          </li>
        </ul>
      </div>

      {/* Mon Compte Section */}
      <div className="text-black">
        <h3 className="font-bold mb-2">MON COMPTE</h3>
        <ul>
          <li>
            <a href="#" className="hover:underline">
              Accéder à mon compte
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Mot de passe oublié
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Créer un compte
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Suivre mes commandes
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Social Media Section */}
    <div className="absolute top-4 right-6 flex flex-col items-end space-y-2">
      <p className="text-black">NOUS SUIVRE</p>
      <div className="flex space-x-4">
        <a href="#" className="hover:bg-red-300">
          <img
            src="./twitter.png"
            alt="Twitter"
            className="h-6 w-6 text-white"
          />
        </a>
        <a href="#" className="hover:bg-red-300">
          <img
            src="./instagram.png"
            alt="Instagram"
            className="h-6 w-6 text-white"
          />
        </a>
        <a href="#" className="hover:bg-red-300">
          <img
            src="./linkedin.png"
            alt="LinkedIn"
            className="h-6 w-6 text-white"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
