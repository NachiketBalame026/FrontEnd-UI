import React from "react";
import ProductCard from "./ProductCard";

const SimilarItems = () => (
  <section className="mt-10">
    <div className="flex justify-between items-center flex-wrap">
      <h2 className="text-2xl font-semibold mb-4 text-black">
        Articles Similaires
      </h2>
      <h1 className="text-black hover:underline">Voir toute la collection</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black">
      <ProductCard
        image="./table.png"
        title="ART DE LA TABLE"
        price="0€"
        unitPrice="0,35€/Pièce"
        reference="RÉF : VABGN5"
        pieces="20 pièces"
      />
      <ProductCard
        image="./table.png"
        title="ART DE LA TABLE"
        price="0€"
        unitPrice="0,35€/Pièce"
        reference="RÉF : VABGN5"
        pieces="20 pièces"
      />
      <ProductCard
        image="./table.png"
        title="ART DE LA TABLE"
        price="0€"
        unitPrice="0,35€/Pièce"
        reference="RÉF : VABGN5"
        pieces="20 pièces"
      />
      <ProductCard
        image="./table.png"
        title="ART DE LA TABLE"
        price="0€"
        unitPrice="0,35€/Pièce"
        reference="RÉF : VABGN5"
        pieces="20 pièces"
      />
    </div>
    <div className="flex justify-between items-center flex-wrap mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-black">
        Ces produits pourraient vous intéresser
      </h2>
      <h1 className="text-black hover:underline">Voir toute la collection</h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-black">
      <ProductCard
        image="./table.png"
        title="ART DE LA TABLE"
        price="0€"
        unitPrice="0,35€/Pièce"
        reference="RÉF : VABGN5"
        pieces="20 pièces"
      />
      <ProductCard
        image="./table.png"
        title="ART DE LA TABLE"
        price="0€"
        unitPrice="0,35€/Pièce"
        reference="RÉF : VABGN5"
        pieces="20 pièces"
      />
      <ProductCard
        image="./table.png"
        title="ART DE LA TABLE"
        price="0€"
        unitPrice="0,35€/Pièce"
        reference="RÉF : VABGN5"
        pieces="20 pièces"
      />
    </div>
  </section>
);

export default SimilarItems;
