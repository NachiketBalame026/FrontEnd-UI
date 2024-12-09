import React from "react";
import SimilarItems from "../components/SimilarItems";
import SubscribeSection from "../components/SubscribeSection";

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap items-start bg-white shadow-md rounded-lg">
        {/* Left Section: Image */}
        <section className="w-full md:w-1/2 p-6">
          <img
            src="./cheese.png"
            alt="Cheese – appareil à raclette 1/2 roue"
            className="w-auto h-auto max-h-[600px] object-cover rounded-lg"
          />
        </section>

        {/* Right Section: Product Details and Cart Button */}
        <section className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold text-black">
            Cheese – appareil à raclette 1/2 roue
          </h1>
          <p className="mt-2 text-gray-600 text-lg">39,50€ / pièce</p>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-6">
              <img src="./scale.svg" className="w-8" />
              <span className="text-black">20 cm</span>
            </div>
            <div className="flex items-center">
              <img src="./scale.svg" className="w-8" />
              <span className="text-black">50 cm</span>
            </div>
          </div>
          <div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                Location appareil à raclette - Raclette traditionnelle 1/2 roue
              </li>
              <li>Préalable en intérieur</li>
              <li>Appareil à raclette professionnel</li>
              <li>Bras de chauffe horizontal réglable en hauteur</li>
              <li>230V</li>
              <li>900W</li>
            </ul>
          </div>
          <div className="mt-20 pt-14">
            {/* Added margin-top for gap */}
            <div className="mt-auto">
              <div className="flex items-center mb-4 w-full">
                <div className="flex items-center">
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l">
                    -
                  </button>
                  <span className="bg-white border-t border-b border-gray-200 px-4 py-1 text-black">
                    1
                  </span>
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r">
                    +
                  </button>
                </div>
                <button className="ml-4 px-4 py-2 bg-teal-500 text-white text-sm font-semibold rounded-lg hover:bg-teal-600 flex-grow">
                  Ajouter au panier
                </button>
              </div>
              <hr className="border-t-2 border-dotted border-gray-300 mt-4" />
            </div>
          </div>
        </section>

        {/* Description Section */}
        <div className="w-full md:w-1/2 p-6">
          <p className="mt-4 text-gray-700 text-2xl">Description produit</p>
          <p className="mt-4 text-gray-700">
            This raclette machine is perfect for melting cheese and serving
            delicious raclette dishes at home or in professional settings. Enjoy
            a traditional raclette experience with this easy-to-use raclette
            machine, perfect for gatherings and family dinners.
          </p>
        </div>

        {/* Questions Section */}
        <div className="w-full md:w-1/2 p-6">
          <div className="border border-gray-300 p-4 rounded-lg mb-2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-black">LIVRAISONS</h2>
              <span className="text-teal-500 text-lg font-semibold cursor-pointer">
                +
              </span>
            </div>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-black">QUESTIONS</h2>
              <span className="text-teal-500 text-lg font-semibold cursor-pointer">
                +
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Items Section */}
      <SimilarItems />

      {/* Subscribe Section */}
      <SubscribeSection />
    </div>
  );
}
