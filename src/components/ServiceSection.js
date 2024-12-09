import React from "react";

const ServiceSection = () => (
  <section className="bg-gradient-to-b from-pink-200 to-white p-8 text-center mt-10 rounded-lg">
    <h2 className="text-2xl font-bold text-black">
      On s&#39;occupe de <span className="text-blue-500">tout</span>
    </h2>
    <p className="mt-2 text-sm text-black">
      Offrez toujours vos meals les mieux livrés, et meeting conveniant busy
      pain.
    </p>
    <div className="flex flex-col md:flex-row justify-around mt-8 space-y-4 md:space-y-0 md:space-x-4">
      <div className="text-center">
        <img
          src="./delivery-icon.png"
          alt="Livraison & Reprise"
          className="mx-auto mb-2"
        />
        <h3 className="font-bold text-black">Livraison & Reprise</h3>
        <p className="text-sm text-black">Selon vos besoins</p>
      </div>
      <div className="text-center">
        <img
          src="./cleaning-icon.png"
          alt="Nettoyage"
          className="mx-auto mb-2"
        />
        <h3 className="font-bold text-black">Nettoyage</h3>
        <p className="text-sm text-black">Selon vos besoins</p>
      </div>
      <div className="text-center">
        <img
          src="./order-icon.png"
          alt="Commande Illimitée"
          className="mx-auto mb-2"
        />
        <h3 className="font-bold text-black">Commande Illimitée</h3>
        <p className="text-sm text-black">Tout est possible</p>
      </div>
      <div className="text-center">
        <img
          src="./transport-icon.png"
          alt="Transport & Enlèvement"
          className="mx-auto mb-2"
        />
        <h3 className="font-bold text-black">Transport & Enlèvement</h3>
        <p className="text-sm text-black">On s&#39;occupe de tout</p>
      </div>
    </div>
  </section>
);

export default ServiceSection;
