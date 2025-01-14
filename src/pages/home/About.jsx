import React from "react";
import aboutImg from "../../assets/aboutImg.webp";

function About() {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 px-4 md:px-20 py-10 md:py-20 bg-white">
        <div className="flex flex-col gap-4 text-center md:text-left max-w-md">
          <h3 className="text-lg font-bold">About Company</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae
            praesentium earum rerum commodi blanditiis iusto quod omnis magnam,
            atque nam eius cum officiis. Ea error recusandae similique odio
            possimus.
          </p>
          <button className="text-white bg-green-600 hover:bg-green-700 py-2 px-4 rounded">
            READ MORE
          </button>
        </div>

        <div className="w-full md:w-auto flex justify-center">
          <img
            src={aboutImg}
            alt="About Company"
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
