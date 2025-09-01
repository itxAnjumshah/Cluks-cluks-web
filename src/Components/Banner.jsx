import React from 'react'
import boximg from '../assets/boximg.avif'
import '../index.css' // ensure CSS import ho

export default function Banner() {
  return (
    <div
      className="
        min-h-[28vh]
        flex
        items-center
        justify-center
        relative
        bg-[#F15B40]
        text-white
      "
      style={{
        backgroundImage: `url(${boximg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '160px auto',
        backgroundPosition: 'center',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
      }}
    >
      <h1
        className="
          uppercase
          relative
          z-10
          text-center
          px-[5%]
          py-[30px]
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
          font-bold
        "
        style={{
          fontFamily: '"MDNichrome", "Arial Black", "Helvetica Black", sans-serif',
          textShadow: '4px 4px 0px rgba(137, 66, 6, 0.43)',
          letterSpacing: '-6px',
          color: '#fff',
        }}
      >
        Gallery
      </h1>
    </div>
  )
}
