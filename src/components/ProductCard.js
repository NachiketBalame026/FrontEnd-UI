import React from "react";

const ProductCard = () => {
  return (
    // <div className="border rounded-lg shadow-md p-4 relative w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg">
    //   <div className="absolute top-2 right-2">
    //     <img
    //       src="./heart.svg"
    //       className="w-6 h-6 hover:bg-red-500 fill-current rounded-full"
    //     />
    //   </div>
    //   <div className="text-sm text-gray-600">ART DE LA TABLE</div>
    //   <div className="my-4">
    //     <img
    //       src="./table.png"
    //       alt="Round Table"
    //       className="w-full rounded-lg"
    //     />
    //   </div>
    <div className="border rounded-lg shadow-md p-4 relative w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg">
      <div className="absolute top-2 right-2">
        <img
          src="./heart.svg"
          className="w-6 h-6 hover:bg-red-500 fill-current rounded-full"
        />
      </div>
      <div className="text-sm text-gray-600">ART DE LA TABLE</div>
      <div className="my-4">
        <img
          src="./table.png"
          alt="Round Table"
          className="w-full rounded-lg"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mt-2 space-y-1 md:space-y-0 md:mr-4">
          <h3 className="text-lg font-semibold">Title</h3>
          <span className="block text-gray-700 text-xs">0,35€/Pièce</span>
          <span className="block text-gray-500 text-xs">RÉF: VABGN5</span>
        </div>
        <div className="md:mt-0 text-right">
          <p className="mt-2 text-lg font-bold text-gray-800">0€</p>
          <div className="border border-gray-300 mt-2 px-2 py-1 inline-block text-gray-500 text-xs rounded-lg bg-teal-300">
            20 pièces
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
