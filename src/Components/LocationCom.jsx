import React from 'react'

const locations = [
  {
    name: 'CANADA',
    img: 'https://popmenucloud.com/cdn-cgi/image/width%3D1440%2Cheight%3D1440%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ctsazijb/567307eb-c8f6-4d25-a6bc-50a392ffd652.jpg',
    url: '#', // Example link
  },
  {
    name: 'UNITED STATES',
    img: 'https://popmenucloud.com/cdn-cgi/image/width%3D480%2Cheight%3D480%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ctsazijb/68ec2b2b-4034-4e2f-b02c-5f63958e40a0.jpg',
    url: '#', // Example link
  },
]

export default function LocationCom() {
  return (
    <div className="w-full px-4 sm:px-16 lg:px-32 flex flex-col sm:flex-row gap-8 justify-center items-center p-8">
      {locations.map(loc => (
        <a
          key={loc.name}
          href={loc.url}
          rel="noopener noreferrer"
          className="relative w-full sm:w-[600px] h-[250px] sm:h-[350px] rounded-3xl overflow-hidden shadow-lg flex items-center justify-center"
          style={{
            backgroundImage: `url(${loc.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textDecoration: 'none',
          }}
        >
          <span
            className="text-white font-bold text-3xl sm:text-5xl drop-shadow-lg tracking-[-0.06em] text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }} // Font family applied here
          >
            {loc.name}
          </span>
        </a>
      ))}
    </div>
  )
}
