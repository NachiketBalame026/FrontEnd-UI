import React from "react";

const ImageFormSection = () => (
  <section className="bg-gradient-to-b text-center mt-10 rounded-lg flex flex-col md:flex-row">
    <div className="w-full md:w-1/2 p-4 rounded-lg">
      <img
        src="./image.png"
        alt="Example Image"
        className="w-full rounded-lg"
      />
    </div>
    <div className="w-full md:w-1/2 p-4 bg-gradient-to-b from-pink-200 to-white rounded-lg">
      <h2 className="text-2xl font-bold text-black">
        On s&#39;occupe de <span className="text-blue-500">tout</span>
      </h2>
      <p className="mt-2 text-sm text-black">
        Office ipsum you must be muted. Synergize helicopter prioritize anyway
        job due harvest most opportunity didn&#39;t. Yet busy any meeting shark
        light marginalised 4-blocker message. Productize corporate nail caught
        synergy highlights lunch. Company another pushback items dear or any.
      </p>
      <form className="mt-4">
        <input
          type="email"
          placeholder="john@doe.com"
          className="border px-4 py-2 rounded-l"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
          S&#39;inscrire
        </button>
      </form>
    </div>
  </section>
);

export default ImageFormSection;
