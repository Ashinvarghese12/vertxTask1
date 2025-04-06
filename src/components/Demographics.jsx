import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Demographics = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Visitors");
  const options = ["Visitors", "Connections", "Interactions", "Impressions"];

  // Data for each option
  const countryData = {
    Visitors: [
      { name: "India", percentage: 40, color: "#7C3AED", coordinates: [78.9629, 20.5937], code: "IN" },
      { name: "USA", percentage: 25, color: "#F97316", coordinates: [-95.7129, 37.0902], code: "US" },
      { name: "CANADA", percentage: 10, color: "#FACC15", coordinates: [-106.3468, 56.1304], code: "CA" },
      { name: "UAE", percentage: 7, color: "#22C55E", coordinates: [53.8478, 23.4241], code: "AE" },
    ],
    Connections: [
      { name: "China", percentage: 35, color: "#EF4444", coordinates: [104.1954, 35.8617], code: "CN" },
      { name: "Brazil", percentage: 28, color: "#10B981", coordinates: [-51.9253, -14.235], code: "BR" },
      { name: "UK", percentage: 18, color: "#3B82F6", coordinates: [-3.4360, 55.3781], code: "GB" },
      { name: "Japan", percentage: 12, color: "#EC4899", coordinates: [138.2529, 36.2048], code: "JP" },
    ],
    Interactions: [
      { name: "Australia", percentage: 22, color: "#F59E0B", coordinates: [133.7751, -25.2744], code: "AU" },
      { name: "Laos", percentage: 39, color: "#9333EA", coordinates: [102.4955, 19.8563], code: "LA" },
      { name: "Oman", percentage: 9, color: "#14B8A6", coordinates: [55.9754, 21.4735], code: "OM" },
      { name: "Iraq", percentage: 65, color: "#6366F1", coordinates: [43.6793, 33.2232], code: "IQ" },
    ],
    Impressions: [
      { name: "France", percentage: 38, color: "#0EA5E9", coordinates: [2.2137, 46.2276], code: "FR" },
      { name: "Italy", percentage: 24, color: "#84CC16", coordinates: [12.5674, 41.8719], code: "IT" },
      { name: "Russia", percentage: 20, color: "#D946EF", coordinates: [105.3188, 61.5240], code: "RU" },
      { name: "Spain", percentage: 11, color: "#F97316", coordinates: [-3.7492, 40.4637], code: "ES" },
    ],
  };

  // Get the current countries based on the selected option
  const countries = countryData[selectedOption];

  return (
    <div className="bg-black text-white w-full rounded-lg h-[300px] border-[1px] border-[#272727]">
      <div className="flex xlg:flex-row flex-col xlg:gap-[0] gap-[52px]">
        <div className="xlg:w-1/2 relative">
          <div className="flex justify-between items-center ps-[19px] pt-[18px] pb-[13px]">
            <h2 className="text-[20px] font-[700] text-white">Demographics</h2>
          </div>
          <div className="relative h-[210px]">
            <div className="ps-[19px] absolute z-10">
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsOptionOpen((prev) => !prev)}
                  className="xmx:text-[12px] text-[10px] font-[600] text-white ps-[10px] pt-[6px] pb-[7px] rounded-[20px] border-[1px] border-[#272727]"
                >
                  {selectedOption} <span className="xmx:ps-[35px] ps-[20px] py-[4px] pe-[7px]">▼</span>
                </button>
                {isOptionOpen && (
                  <ul className="absolute left-8 mt-2 w-[85px] bg-black text-white border border-[#1D1D1D] rounded-md shadow-lg z-10">
                    {options.map((option) => (
                      <li
                        key={option}
                        onClick={() => {
                          setSelectedOption(option);
                          setIsOptionOpen(false);
                        }}
                        className={`px-4 py-2 text-[8px] font-[600] hover:bg-[#1D1D1D] cursor-pointer ${option === selectedOption ? "bg-[#1D1D1D]" : ""
                          }`}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="absolute inset-0">
              <ComposableMap
                projectionConfig={{ scale: 110 }}
                width={500}
                height={250}
                className="w-full h-full"
                style={{ backgroundColor: "transparent" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#222222"
                        stroke="#333333"
                        strokeWidth={0.5}
                      />
                    ))
                  }
                </Geographies>
                {countries.map(({ coordinates, color }, index) => (
                  <Marker key={index} coordinates={coordinates}>
                    <circle r={6} fill={color} stroke="#000" strokeWidth={2} />
                  </Marker>
                ))}
              </ComposableMap>
            </div>
            <div className="xxs:ps-[23px] ps-[10px] pb-[18px] h-[30px] absolute bottom-0 left-0 bg-black">
              <div className="flex xmx:justify-between xmx:w-[320px] rounded-[20px] border-[1px] border-[#1D1D1D]">
                {countries.map(({ name, color }, index) => (
                  <div key={index} className="flex items-center gap-2 px-[13px] py-[7px]">
                    <span
                      className="xmx:w-[12px] xxs:w-[8px] w-[6px] xmx:h-[12px] xxs:h-[8px] h-[6px] rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                    <span className="xmx:text-[12px] xxs:text-[10px] text-[8px] font-[600] text-white">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="xlg:w-1/2 ps-[50px] xlg:pt-[29px] pt-[10px] xlg:pb-[0px] pb-[10px] pe-[21px] xlg:border-[0px] rounded-lg border-[1px] border-[#272727]">
          {countries.map((country, index) => (
            <div key={index} className="flex flex-col mb-4">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-6 h-5 border border-gray-700 bg-gray-800 overflow-hidden">
                    <img
                      src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                      alt={`${country.name} flag`}
                      className="w-6 h-4 object-cover"
                    />
                  </div>
                  <span className="text-[16px] font-[600]">{country.name}</span>
                </div>
                <span className="text-[16px] font-[600]">{country.percentage}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${country.percentage}%`,
                    backgroundColor: country.color
                  }}
                ></div>
              </div>
            </div>
          ))}
          <div className="border-t border-[#272727] xlg:mt-[14px] mt-[20px] mb-[22px]  "></div>
          <div className="flex justify-end">
            <div className="flex items-center text-[10px] font-[600] text-white">
              View all countries
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ms-[13px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demographics;