import React, { useState } from "react";
import { ImCheckmark } from "react-icons/im";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Freelancer",
      monthlyPrice: 25,
      yearlyPrice: 250,
      saves: "$25 USD per month, paid annually",
      features: [
        "1 Project",
        "Basic Support",
        "Access to all templates",
        "5GB Storage",
      ],
    },
    {
      name: "Professional",
      monthlyPrice: 65,
      yearlyPrice: 650,
      saves: "$55 USD per month, paid annually",
      features: [
        "5 Projects",
        "Priority Support",
        "Access to all templates",
        "25GB Storage",
        "Advanced Analytics",
      ],
    },
    {
      name: "Agency",
      monthlyPrice: 95,
      yearlyPrice: 950,
      saves: "$95 USD per month, paid annually",
      features: [
        "Unlimited Projects",
        "24/7 Support",
        "Access to all templates",
        "Unlimited Storage",
        "Custom Branding",
        "Team Collaboration",
      ],
    },
  ];

  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="max-w-screen-xl container mx-auto px-4 mb-20">
      <div className="text-center mt-10 mb-10">
        <p className="text-primary mb-5">Pricing</p>
        <h1 className="text-2xl font-bold md:text-4xl mb-5">
          Choose Your Plan
        </h1>
        <p>
          Our pricing plans are flexible and designed to fit your needs. Choose
          a plan that works best for you.
        </p>
        <div className="flex gap-2 justify-center mt-10 items-center">
          <p>{isMonthly ? "Monthly Pricing ON" : "Yearly Pricing ON"}</p>
          <input
            onChange={() => setIsMonthly(!isMonthly)}
            type="checkbox"
            checked={!isMonthly}
            className="toggle toggle-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((pricing, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-sm text-start hover:bg-gray-800 hover:cursor-pointer transition duration-300 ease-in-out w-full mx-auto min-h-full"
          >
            <div className="card-body">
              <div className="text-center space-y-5">
                <h2 className="text-3xl font-bold">{pricing.name}</h2>
                <span className="text-sm text-gray-400">
                  Best For {pricing.name}
                </span>
                <div className="text-xl mt-5">
                  <span className="text-4xl font-bold">
                    ${isMonthly ? pricing.monthlyPrice : pricing.yearlyPrice}
                  </span>
                  <span className="text-xl">/{isMonthly ? "mo" : "yr"}</span>
                </div>
                {!isMonthly && (
                  <p className="text-sm text-success">{pricing.saves}</p>
                )}
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">
                    Choose {pricing.name}
                  </button>
                </div>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-sm">
                {pricing.features.map((feature, idx) => (
                  <li className="flex gap-2 items-center" key={idx}>
                    <ImCheckmark className="text-success" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
