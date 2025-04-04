import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Demographics = () => {
  const countries = [
    { name: "India", percentage: 40, color: "#7C3AED", coordinates: [78.9629, 20.5937], flag: "🇮🇳" },
    { name: "USA", percentage: 25, color: "#F97316", coordinates: [-95.7129, 37.0902], flag: "🇺🇸" },
    { name: "CANADA", percentage: 10, color: "#FACC15", coordinates: [-106.3468, 56.1304], flag: "🇨🇦" },
    { name: "UAE", percentage: 7, color: "#22C55E", coordinates: [53.8478, 23.4241], flag: "🇦🇪" },
  ];

  return (
    <div className="bg-black text-white w-full rounded-lg h-[300px] border-[1px] border-[#272727]">
      <div className="flex xlg:flex-row flex-col xlg:gap-[0] gap-[52px]">
        <div className="xlg:w-1/2 relative">
          <div className="flex justify-between items-center ps-[19px] pt-[18px] pb-[13px]">
            <h2 className="text-[20px] font-[700] text-white">Demographics</h2>
          </div>
          <div className="relative h-[210px]">
            <div className="ps-[19px] absolute z-10">
              <button className="text-[12px] font-[600] text-white ps-[10px] pt-[6px] pb-[7px] rounded-[20px] border-[1px] border-[#272727]">
                Visitors <span className="ps-[35px] py-[4px] pe-[7px]">▼</span>
              </button>
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
              <div className="flex xmx:justify-between xmx:w-[320px]  rounded-[20px] border-[1px] border-[#1D1D1D] ">
                {countries.map(({ name, color }, index) => (
                  <div key={index} className="flex items-center gap-2 px-[13px] py-[7px]">
                    <span className="xmx:w-[12px] xxs:w-[8px] w-[6px] xmx:h-[12px] xxs:h-[8px] h-[6px] rounded-full" style={{ backgroundColor: color }}></span>
                    <span className="xmx:text-[12px] xxs:text-[10px] text-[8px] font-[600] text-white">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="xlg:w-1/2 ps-[50px] xlg:pt-[29px] pt-[10px] xlg:pb-[0px] pb-[10px] pe-[21px] xlg:border-[0px] rounded-lg border-[1px] border-[#272727] ">
          {countries.map((country, index) => (
            <div key={index} className="flex flex-col mb-4">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{country.flag}</span>
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
          <div className="flex justify-end ">
            <div className="flex items-center text-[10px] font-[600] text-white">
              View all countries
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ms-[13px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
