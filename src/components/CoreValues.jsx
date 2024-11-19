import React, { useState } from "react";
import coreValueImage from "../assets/coreValue.png";

const CoreValues = () => {
  const [showAllCoreValues, setShowAllCoreValues] = useState(false);

  const coreValues = [
    "B - Brilliance: Embracing curiosity and creativity to achieve academic excellence.",
    "L - Leadership: Empowering individuals to take charge of their learning and make a positive impact.",
    "O - Originality: Fostering innovative thinking and unique perspectives.",
    "C - Collaboration: Building a supportive community that values teamwork, mutual respect, open communication, and knowledge-sharing.",
    "K - Knowledge: Pursuing wisdom and understanding with passion and dedication.",
    "S - Scholarship: Striving for academic rigor, critical thinking, and intellectual growth.",
    "C - Character: Developing integrity, resilience, and social responsibility.",
    "H - Heritage: Honoring the past, celebrating diversity, and shaping a brighter future.",
    "O - Opportunity: Creating access and inclusivity for all to reach their full potential.",
    "L - Legacy: Striving to make a lasting, positive impact.",
    "A - Aspiration: Inspiring individuals to set ambitious goals and strive for excellence.",
    "R - Responsibility: Taking ownership, accountability, and stewardship.",
    "S - Success: Celebrating achievements and progress along the academic journey.",
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row items-center mt-10">
      <div className="md:w-1/2 space-y-10">
        <div>
          <h2 className="text-3xl text-[#720034] font-bold">Core Values</h2>
          <p className="mt-5">{coreValues[0]}</p>
          {showAllCoreValues && (
            <ul className="list-disc pl-5 mt-4 space-y-2">
              {coreValues.slice(1).map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          )}
          <button
            onClick={() => setShowAllCoreValues(!showAllCoreValues)}
            className="mt-4 px-6 py-2 bg-[#720034] text-white font-semibold rounded hover:bg-[#470020]"
          >
            {showAllCoreValues ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
        <img
          src={coreValueImage}
          alt="Core Values"
          className="w-full md:w-[85%] lg:w-[75%] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default CoreValues;