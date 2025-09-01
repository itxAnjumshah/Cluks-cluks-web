import React, { useState } from "react";

// Images array (replace/add more if needed)
const items = [
  { id: 1, img: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ctsazijb/16510b0f-13d7-4450-914f-352b8b3dad93.jpg", name: "Delicious Pizza" },
  { id: 2, img: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ctsazijb/68ec2b2b-4034-4e2f-b02c-5f63958e40a0.jpg", name: "Tasty Pasta" },
  { id: 3, img: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ctsazijb/cd7b47eb-8388-4b34-b18a-065a1e4885ed.jpg", name: "Cheese Burger" },
  { id: 4, img: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ctsazijb/ec294b25-ef9c-4822-850e-2a20609d1ec9.jpg", name: "Crispy Fries" },
  { id: 5, img: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ctsazijb/567307eb-c8f6-4d25-a6bc-50a392ffd652.jpg", name: "Fresh Salad" },
  { id: 6, img: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ctsazijb/cf6b5abc-da95-4094-b3c9-d2589e4b2e87.jpg", name: "Grilled Chicken" },
  { id: 7, img: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ctsazijb/d46b8418-537d-4a91-a91c-4d49ebc551d5.jpg", name: "Ice Cream" },
  { id: 8, img: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ctsazijb/ad3a20e6-ef11-47b2-8ce5-b82df4f40005.jpg", name: "Chocolate Cake" },
  { id: 9, img: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ctsazijb/e8d93773-f08f-4c12-97bf-8a9e97e008e6.jpg", name: "Pancakes" },
];

function MasonryItem({ item, onClick }) {
  return (
    <article
      className="mb-4 break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white group relative cursor-pointer"
      onClick={onClick}
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-full object-cover"
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </article>
  );
}

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const handlePrev = () => {
    setZoom(1);
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setZoom(1);
    setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  const closeModal = () => {
    setZoom(1);
    setSelectedIndex(null);
  };

  const zoomIn = () => setZoom((z) => Math.min(z + 0.2, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.5));

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="w-full pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {items.map((item, index) => (
            <MasonryItem
              key={item.id}
              item={item}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex flex-col z-50">
          {/* Top-right Controls (Close + Zoom) */}
          <div className="absolute top-4 right-4 flex space-x-3">
            <button
              className="bg-black/60 hover:bg-black/80 text-white px-3 py-1 rounded text-xl"
              onClick={zoomOut}
            >
              ➖
            </button>
            <button
              className="bg-black/60 hover:bg-black/80 text-white px-3 py-1 rounded text-xl"
              onClick={zoomIn}
            >
              ➕
            </button>
            <button
              className="bg-black/60 hover:bg-black/80 text-white px-3 py-1 rounded text-2xl"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>

          {/* Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            onClick={handlePrev}
          >
            ❮
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            onClick={handleNext}
          >
            ❯
          </button>

          {/* Image Container */}
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <div className="w-full sm:w-4/5 lg:w-3/5 flex justify-center">
              <img
                src={items[selectedIndex].img}
                alt={items[selectedIndex].name}
                className="h-full w-auto object-contain transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>
          </div>

          {/* Caption */}
          <div className="bg-black/60 text-white  px-6 py-3">
            <span className="text-lg font-medium">
              {items[selectedIndex].name}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
