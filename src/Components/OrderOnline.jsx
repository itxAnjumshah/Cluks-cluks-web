import React, { useState } from "react";

const locations = [
  {
    name: "TORONTO",
    address: "222 The Esplanade",
    city: "Toronto, ON M5A 4M8",
    country: "Canada",
    link: "#",
  },
  {
    name: "MISSISSAUGA",
    address: "70 World Dr.",
    city: "Mississauga, ON L5T 2Z3",
    country: "Canada",
    link: "#",
  },
  {
    name: "SCARBOROUGH",
    address: "41 Lebovic Ave A112",
    city: "Scarborough, ON M1L 0H2",
    country: "Canada",
    link: "#",
  },
  {
    name: "AJAX",
    address: "157 Harwood Ave N Unit 5C",
    city: "Ajax, ON L1Z 0B6",
    country: "Canada",
    link: "#",
  },
  {
    name: "OAKVILLE",
    address: "511 Maple Grove Dr Unit 30",
    city: "Oakville, ON L6J 6X8",
    country: "Canada",
    link: "#",
  },
  {
    name: "WATERLOO",
    address: "160 University Ave W",
    city: "Waterloo, ON N2L 3E9",
    country: "Canada",
    link: "#",
  },
  {
    name: "CALGARY",
    address: "50 Sage Hill Passage NW",
    city: "Calgary, ON T3R 0S4",
    country: "Canada",
    link: "#",
  },
];

export default function OrderOnline() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28 text-center">
        {locations.map((loc, idx) => (
          <div key={idx}>
            {/* Heading with custom letter-spacing */}
            <h2 className="text-[#E75C47] font-black text-3xl mb-6 uppercase tracking-[-0.06em] font-[Montserrat]">
              {loc.name}
            </h2>

            {/* Address */}
            <div className="mb-6 text-[#8B4F19] text-lg font-normal leading-snug font-[Montserrat]">
              <div>{loc.address}</div>
              <div>{loc.city}</div>
              <div>{loc.country}</div>
            </div>

            {/* Order Button */}
            <div className="inline-block group">
              <a
                href={loc.link}
                onClick={() => setActiveIdx(idx)}
                className={`font-bold text-lg uppercase font-[Montserrat] inline-flex items-center gap-1 mb-1
                  transition-all duration-300 tracking-[0.05em]
                  ${activeIdx === idx ? "text-black" : "text-[#E75C47]"}
                  group-hover:text-black
                `}
                style={{
                  fontWeight: activeIdx === idx ? "900" : "bold",
                }}
              >
                ORDER <span className="text-xl font-extrabold">&raquo;</span>
              </a>
              <div
                className={`border-b-[3px] w-28 mx-auto mt-1
                  transition-all duration-300
                  ${activeIdx === idx ? "border-black w-36" : "border-[#E75C47]"}
                  group-hover:border-black group-hover:w-36
                `}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
