import { Icon } from "@iconify/react";
import React from "react";

function Offer() {
  return (
    <div className="w-full bg-gray-200 py-8 flex flex-col gap-4 justify-center items-center">
      <div>
        <h2 className="text-lg font-bold text-center pb-4">
          Explore our services
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 px-4">
        <div className="flex flex-col gap-2 rounded-md border-2 border-white bg-white p-6 max-w-xs">
          <Icon
            className="text-green-600"
            icon="hugeicons:identity-card"
            width="24"
            height="24"
          />
          <h3 className="font-bold text-green-600">
            Identity Document Verification
          </h3>
          <p>
            Verify the authenticity of any Government ID document instantly and
            seamlessly to enhance user experience and turnaround time.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-md border-2 border-white bg-white p-6 max-w-xs">
          <Icon
            className="text-green-600"
            icon="streamline:user-profile-focus"
            width="24"
            height="24"
          />
          <h3 className="font-bold text-green-600">
            Digital Identity Verification
          </h3>
          <p>
            Verify the ID Number of any Government identity quickly to reduce
            customer onboarding time and improve user experience.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-md border-2 border-white bg-white p-6 max-w-xs">
          <Icon
            className="text-green-600"
            icon="carbon:user-avatar"
            width="24"
            height="24"
          />
          <h3 className="font-bold text-green-600">Biometrics Check</h3>
          <p>
            Verify your customers by cross-referencing their pictures against
            our wide database of government-approved identities.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-md border-2 border-white bg-white p-6 max-w-xs">
          <Icon
            className="text-green-600"
            icon="fluent:location-checkmark-24-regular"
            width="24"
            height="24"
          />
          <h3 className="font-bold text-green-600">Physical Address Check</h3>
          <p>
            Verify any address nationwide and ensuring the identity of an
            applicant can be linked to their residential address.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-md border-2 border-white bg-white p-6 max-w-xs">
          <Icon
            className="text-green-600"
            icon="mingcute:location-2-line"
            width="24"
            height="24"
          />

          <h3 className="font-bold text-green-600">
            Digital Address Verification
          </h3>
          <p>
            Verify assets remotely while providing the same high level of
            accuracy and confidence as traditional physical checks.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-md border-2 border-white bg-white p-6 max-w-xs">
          <Icon
            className="text-green-600"
            icon="famicons:business-outline"
            width="24"
            height="24"
          />

          <h3 className="font-bold text-green-600">Business Check</h3>
          <p>
            Validate a business entity and confirm its legitimacy with access to
            registries and legitimate data sources, all in real-time.
          </p>
        </div>
      </div>

      <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition-colors">
        Get Started
      </button>
    </div>
  );
}

export default Offer;
