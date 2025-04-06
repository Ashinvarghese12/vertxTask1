import React, { useState } from "react";
import Demographics from "./Demographics";
import VisitorsChart from "./VistorChart";

export default function Overview() {
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Visitors");
    const options = ["Visitors", "Interactions", "Impressions"];

    const data = {
        Visitors: {
            founders: { value: "7.4K", percent: "+10%", change: "(+740)" },
            investors: { value: "6.09K", percent: "+8%", change: "(+609)" },
        },
        Interactions: {
            founders: { value: "5.2K", percent: "+5%", change: "(+260)" },
            investors: { value: "4.5K", percent: "+4%", change: "(+180)" },
        },
        Impressions: {
            founders: { value: "10K", percent: "+15%", change: "(+1500)" },
            investors: { value: "8.2K", percent: "+12%", change: "(+984)" },
        },
    };

    return (
        <>
            <div className="xsm:flex hidden justify-between border-b-[1px] border-[#1D1D1D] h-[50px]">
                <div className="flex text-[16px] font-[600] ">
                    <span className="px-[23px] py-[12.39px] text-white  border-e-[1px] border-[#1D1D1D]">
                        <p>Overview</p>
                    </span>
                    <span className="ps-[17px] pe-[18.67px] pt-[12.01px] pb-[12.55px] text-[#555555]  border-e-[1px] border-[#1D1D1D]">
                        <p>Demographics</p>
                    </span>
                </div>
                <div className="px-[41px] py-[12.39px] text-white  border-s-[1px] border-[#1D1D1D]">
                    <p>More</p>
                </div>
            </div>
            <div className="ps-[23px] msx:ps-[60.33px] pe-[22px] msx:pe-[73.49px] pt-[34.8px] xsm:pb-[74.43px] pb-[22px] bg-[#080808] xsm:h-[calc(100vh-100px)] smx:h-[calc(100vh-205px)] h-[calc(100vh-185px)] overflow-y-auto">
                <p className="text-[28px] font-[800] text-white pb-[24.81px]">Overview</p>
                <div className="flex flex-col">
                    <div className="flex xlg:flex-row flex-col gap-[15px] pb-[16px]">
                        <div className="rounded-lg xmx:min-w-[430px] xlg:w-3/4 w-full  h-[285px] mb-[14.89px] border-[1px] border-[#272727]">
                            <VisitorsChart />
                        </div>
                        <div className="bg-black rounded-lg border border-[#272727] xlg:w-1/4 w-full xlg:min-w-[250px] xmx:min-w-[430px] xlg:h-[285px] xmx:h-[220px] h-[200px]">
                            <div className=" text-white ps-[19px] pt-[15px]">
                                <div className="flex flex-row justify-between  pe-[20px]">
                                    <p className="text-[20px] font-[700]">Insights</p>
                                    <div className="relative inline-block text-left ps-[19px]">
                                        <button
                                            onClick={() => setIsOptionOpen((prev) => !prev)}
                                            className="text-[12px] font-[600] text-white ps-[10px] pt-[6px] pb-[7px] rounded-[20px] border-[1px] border-[#272727]"
                                        >
                                            {selectedOption} <span className="ps-[35px] py-[4px] pe-[7px]">▼</span>
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
                                <div className="flex xlg:flex-col justify-between pe-[20px]">
                                    <div className="xlg:mt-[11px] mt-[17px]">
                                        <p className="text-[16px] font-[600]">Founders</p>
                                        <div className="flex items-center ">
                                            <p className="xmx:text-[32px] text-[24px] font-[800]">
                                                {data[selectedOption].founders.value}
                                            </p>
                                            <div className="flex flex-col xmx:ps-[24px] ps-[15px]">
                                                <p className="text-[#01754F] text-[12px] font-[600]">
                                                    {data[selectedOption].founders.percent}
                                                </p>
                                                <p className="text-[#555555] text-[12px] font-[600]">
                                                    {data[selectedOption].founders.change}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xlg:mt-[11px] mt-[17px]">
                                        <p className="text-[16px] font-[600]">Investors</p>
                                        <div className="flex items-center">
                                            <p className="xmx:text-[32px] text-[24px] font-[800]">
                                                {data[selectedOption].investors.value}
                                            </p>
                                            <div className="flex flex-col xmx:ps-[19px] ps-[10px]">
                                                <p className="text-[#01754F] text-[12px] font-[600]  ">
                                                    {data[selectedOption].investors.percent}
                                                </p>
                                                <p className="text-[#555555] text-[12px] font-[600]">
                                                    {data[selectedOption].investors.change}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-[#272727] xlg:mt-[14px] mt-[20px] mb-[22px] ms-[19px] me-[23px] "></div>
                            <div className="flex justify-end pe-[20px]">
                                <div className="flex items-center text-[10px] font-[600] text-white">
                                    View all countries
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ms-[13px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full border-[1px] border-[#272727] rounded-lg  xlg:min-w-[694px] xmx:min-w-[430px] ">
                        <Demographics />
                    </div>
                </div>
            </div >
        </>
    );
}