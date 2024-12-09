"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <img src="./logo.png" alt="Weframe Tech Logo" className="h-8" />
          <span className="text-xl font-semibold text-gray-800">
            weframe<span className="text-blue-500">tech</span>
          </span>
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex flex-1 max-w-xl mx-6 hidden md:flex">
          <input
            type="text"
            placeholder="Rechercher un produit"
            className="w-full py-2 px-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
          />
          <button className="ml-2 p-2 text-gray-500 hover:text-blue-500">
            <img src="./search.svg" className="w-8" />
          </button>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center space-x-6 hidden md:flex">
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
          >
            <img src="./bulb.svg" className="w-8" />
            <span>Inspirations</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
          >
            <img src="./like.svg" className="w-8" />
            <span>Mes favoris</span>
            <span className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs font-semibold ml-1">
              24
            </span>
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Panier
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            FR <span className="text-sm text-gray-400">▼</span>
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-blue-500"
          >
            <img
              src="./menu.svg"
              className="w-6 h-6"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <div className="flex flex-col space-y-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Rechercher un produit"
                className="w-full py-2 px-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="ml-2 p-2 text-gray-500 hover:text-blue-500">
                <img src="./search.svg" className="w-8" />
              </button>
            </div>
            <a
              href="#"
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
            >
              <img src="./bulb.svg" className="w-8" />
              <span>Inspirations</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
            >
              <img src="./like.svg" className="w-8" />
              <span>Mes favoris</span>
              <span className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs font-semibold ml-1">
                24
              </span>
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Panier
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              FR <span className="text-sm text-gray-400">▼</span>
            </a>
          </div>
        </div>
      )}

      {/* Bottom Navbar */}
      <div className="bg-gray-50 border-t">
        <div className="container mx-auto px-6 py-2 flex space-x-4 overflow-x-auto text-sm text-gray-600">
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline whitespace-nowrap"
          >
            ART DE LA TABLE
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            MOBILIER
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            NAPPAGE
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            MATÉRIEL DE SALLE
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            CUISINE
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            BARBECUE
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            TENTE
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            CHAUFFAGE
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            PODIUM - PISTE DE DANSE
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            SON ET LUMIÈRE
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            PACKS
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            CONSOMMABLES
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
