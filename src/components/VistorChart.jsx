import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Updated data with consistent capitalization and all metrics
const initialData = [
  { date: "Mar 1", Visitors: 300, Connections: 250, Interactions: 180, Impressions: 400 },
  { date: "Mar 2", Visitors: 1200, Connections: 400, Interactions: 300, Impressions: 700 },
  { date: "Mar 3", Visitors: 900, Connections: 550, Interactions: 400, Impressions: 800 },
  { date: "Mar 4", Visitors: 1500, Connections: 600, Interactions: 1700, Impressions: 950 },
  { date: "Mar 5", Visitors: 500, Connections: 500, Interactions: 1600, Impressions: 600 },
  { date: "Mar 6", Visitors: 1300, Connections: 650, Interactions: 750, Impressions: 1000 },
  { date: "Mar 7", Visitors: 1100, Connections: 500, Interactions: 250, Impressions: 850 },
  { date: "Mar 8", Visitors: 1800, Connections: 900, Interactions: 800, Impressions: 1100 },
  { date: "Mar 9", Visitors: 1250, Connections: 600, Interactions: 300, Impressions: 950 },
  { date: "Mar 10", Visitors: 800, Connections: 400, Interactions: 200, Impressions: 700 },
  { date: "Mar 11", Visitors: 1600, Connections: 850, Interactions: 700, Impressions: 1200 },
  { date: "Mar 12", Visitors: 700, Connections: 400, Interactions: 300, Impressions: 750 },
  { date: "Mar 13", Visitors: 500, Connections: 300, Interactions: 200, Impressions: 500 },
  { date: "Mar 14", Visitors: 750, Connections: 350, Interactions: 250, Impressions: 600 },
  { date: "Mar 15", Visitors: 700, Connections: 400, Interactions: 300, Impressions: 700 },
  { date: "Mar 16", Visitors: 1100, Connections: 600, Interactions: 450, Impressions: 900 },
  { date: "Mar 17", Visitors: 900, Connections: 450, Interactions: 400, Impressions: 850 },
  { date: "Mar 18", Visitors: 650, Connections: 300, Interactions: 200, Impressions: 600 },
  { date: "Mar 19", Visitors: 1100, Connections: 550, Interactions: 350, Impressions: 950 },
  { date: "Mar 20", Visitors: 1900, Connections: 950, Interactions: 700, Impressions: 1300 },
  { date: "Mar 21", Visitors: 1000, Connections: 500, Interactions: 400, Impressions: 800 },
  { date: "Mar 22", Visitors: 600, Connections: 300, Interactions: 200, Impressions: 500 },
  { date: "Mar 23", Visitors: 1100, Connections: 600, Interactions: 350, Impressions: 950 },
  { date: "Mar 24", Visitors: 500, Connections: 300, Interactions: 200, Impressions: 550 },
  { date: "Mar 25", Visitors: 1200, Connections: 700, Interactions: 500, Impressions: 1000 },
  { date: "Mar 26", Visitors: 800, Connections: 450, Interactions: 300, Impressions: 750 },
  { date: "Mar 27", Visitors: 1400, Connections: 800, Interactions: 600, Impressions: 1100 },
  { date: "Mar 28", Visitors: 700, Connections: 400, Interactions: 300, Impressions: 700 },
  { date: "Mar 29", Visitors: 900, Connections: 500, Interactions: 350, Impressions: 850 },
  { date: "Mar 30", Visitors: 1700, Connections: 850, Interactions: 600, Impressions: 1200 },
];

const VisitorsChart = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState("Visitors");
  const [selectedDate, setSelectedDate] = useState("Last 30 days");
  const [selectedAdd, setSelectedAdd] = useState("+ Add");

  const addOption = ["+ Add", "Connections", "Interactions", "Impressions"];
  const options = ["Visitors", "Connections", "Interactions", "Impressions"];
  const dates = ["This week", "Last week", "Last 30 days"];

  const colors = {
    Visitors: "#ffffff",
    Connections: "#4ade80",
    Interactions: "#60a5fa",
    Impressions: "#facc15",
  };

  const getFilteredData = () => {
    switch (selectedDate) {
      case "This week":
        return initialData.slice(-7);
      case "Last week":
        return initialData.slice(-14, -7);
      case "Last 30 days":
      default:
        return initialData;
    }
  };

  const filteredData = getFilteredData();

  // Calculate latest value and percentage change
  const latestValue = filteredData.length > 0 ? filteredData[filteredData.length - 1][selectedOption] : 0;
  const previousValue = filteredData.length > 1 ? filteredData[filteredData.length - 2][selectedOption] : 0;
  const percentageChange = previousValue
    ? (((latestValue - previousValue) / previousValue) * 100).toFixed(1)
    : 0;

  return (
    <div className="bg-black text-white ps-[16px] pe-[23px] pb-[28px] pt-[12px] rounded-lg border border-[#272727] xmx:min-w-[430px] w-auto h-[285px]">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <div className="flex gap-[6px]">
            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsOptionOpen((prev) => !prev)}
                className="xsx:text-[12px] text-[10px] font-[600] text-white ps-[10px] pt-[6px] pb-[7px] rounded-[20px] border-[1px] border-[#272727] bg-black flex items-center"
              >
                {selectedOption} <span className="mx-1">▼</span>
              </button>
              {isOptionOpen && (
                <ul className="absolute left-0 mt-2 w-[85px] bg-black text-white border border-[#1D1D1D] rounded-md shadow-lg z-10">
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
            <div className="flex gap-[6px] text-white ">
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsDateOpen((prev) => !prev)}
                  className=" p-[5px] xmx:ps-[10px] xmx:pt-[6px] xmx:pb-[7px] rounded-[20px] border-[1px] border-[#272727] bg-transparent xsx:text-[12px] text-[10px] font-[600]"
                >
                  {selectedDate} <span className="mx-1">▼</span>
                </button>
                {isDateOpen && (
                  <ul className="absolute left-1 mt-1 w-[85px] bg-black text-white border border-[#1D1D1D] rounded-md shadow-lg z-10">
                    {dates.map((date) => (
                      <li
                        key={date}
                        onClick={() => {
                          setSelectedDate(date);
                          setIsDateOpen(false);
                        }}
                        className={`px-4 py-2 text-[8px] font-[600] hover:bg-[#1D1D1D] cursor-pointer ${date === selectedDate ? "bg-[#1D1D1D]" : ""
                          }`}
                      >
                        {date}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsAddOpen((prev) => !prev)}
                  className=" p-[5px] xmx:ps-[10px] xmx:pt-[6px] xmx:pb-[7px] rounded-[20px] border-[1px] border-[#272727] bg-transparent xsx:text-[12px] text-[10px] font-[600]"
                >
                  {selectedAdd} <span className="mx-1">▼</span>
                </button>
                {isAddOpen && (
                  <ul className="absolute left-1 mt-1 w-[85px] bg-black text-white border border-[#1D1D1D] rounded-md shadow-lg z-10">
                    {addOption.map((add) => (
                      <li
                        key={add}
                        onClick={() => {
                          if (add !== selectedOption) {
                            setSelectedAdd(add);
                            setIsAddOpen(false);
                          }
                        }}
                        className={`px-4 py-2 text-[8px] font-[600] hover:bg-[#1D1D1D] cursor-pointer ${add === selectedAdd ? "bg-[#1D1D1D]" : ""
                          }`}
                      >
                        {add}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="flex">
            <p className="xmx:text-[32px] text-[24px] font-[800] text-white">
              {latestValue >= 1000 ? `${(latestValue / 1000).toFixed(2)}K` : latestValue}
            </p>
            <div className="flex flex-col ps-[10px] xmx:pt-[10px] pt-[5px] ">
              <p className={`${percentageChange >= 0 ? "text-[#01754F]" : "text-red-500"} xms:text-[12px] text-[10px] font-[600]`}>
                {percentageChange >= 0 ? "+" : ""}{percentageChange}%
              </p>
              <p className="text-[#555555] xmx:text-[12px] text-[10px] font-[600]">({previousValue})</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[160px] mt-4">
        <ResponsiveContainer width="100%" height="110%">
          <LineChart data={filteredData}>
            <XAxis
              dataKey="date"
              tick={{ fill: "gray", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "#444" }}
              tickFormatter={(date) => {
                return ["1", "5", "10", "15", "20", "25", "30"].includes(date.split(" ")[1]) ? date : "";
              }}
            />
            <YAxis
              tick={{ fill: "gray", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              domain={[200, 2000]}
              ticks={[200, 400, 800, 1200, 1600, 2000]} 
              tickFormatter={(value) => (value >= 1000 ? `${value / 1000}K` : value)}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#222",
                color: "#fff",
                borderRadius: "5px",
                border: "none",
              }}
              cursor={{ stroke: "gray", strokeWidth: 0.5 }}
              formatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value}
              labelFormatter={(label) => `Date: ${label}`}
            />
            <Line
              type="monotone"
              dataKey={selectedOption}
              stroke={colors[selectedOption]}
              strokeWidth={2}
              dot={false} 
            />
            {selectedAdd !== "+ Add" && (
              <Line
                type="monotone"
                dataKey={selectedAdd}
                stroke={colors[selectedAdd]}
                strokeWidth={2}
                dot={false}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorsChart;