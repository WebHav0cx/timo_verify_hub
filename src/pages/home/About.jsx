import React from "react";
import aboutImg from "../../assets/aboutImg.webp";

function About() {
  return (
    <div className="flex justify-around items-center px-20 py-20 bg-gray-200">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">About Company</h3>
        <p className="w-96 text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae
          praesentium earum rerum commodi blanditiis iusto quod omnis magnam,
          atque nam eius cum officiis. Ea error recusandae similique odio
          possimus.
        </p>
        <button className="text-white bg-green-700 py-2 px-4 w-40">
          READ MORE
        </button>
      </div>
      <img src={aboutImg} alt="" />
    </div>
  );
}

export default About;
