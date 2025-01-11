import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

function Offer() {
  return (
    <div className="py-8">
      <div className="flex flex-col py-8 items-center justify-center gap-4">
        <h2 className="text-lg font-bold">What We Do?</h2>
        <p className="text-sm">Absolutely Stunning Design and Functionality.</p>
      </div>
      <div className="flex justify-around items-center px-16">
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <Icon
            className="text-green-600 "
            icon="hugeicons:hierarchy"
            width="48"
            height="48"
          />
          <h3>Business Consultancy</h3>
          <p className="w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            provident rerum laudantium quae dicta fugiat nihil, necessitatibus .
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <Icon
            className="text-green-600 "
            icon="ci:chart-line"
            width="48"
            height="48"
          />
          <h3>Help to grow business</h3>
          <p className="w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            provident rerum laudantium quae dicta fugiat nihil, necessitatibus .
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <Icon
            className="text-green-600 "
            icon="lsicon:time-two-outline"
            width="48"
            height="48"
          />
          <h3>Great Support</h3>
          <p className="w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            provident rerum laudantium quae dicta fugiat nihil, necessitatibus .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
