import { useState } from 'react';

const BrandFilter = ({ setSelectedBrand }) => {
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  const brands = [
    'Gucci',
    'Essence',
    'Calvin Klein',
    'Dolce & Gabbana',
    'Glamour Beauty',
    'Velvet Touch',
    'Chic Cosmetics',
    'Nail Couture',
    'Chanel',
    'Dior',
    'Furniture Co.',
    'Knoll',
    'Bath Trends',
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsBrandsOpen((prev) => !prev)}
        className="bg-[#CEB5B7] text-[#0A141B] px-5 py-2 rounded-lg hover:bg-[#FF7477] transition"
      >
        Brands
      </button>
      {isBrandsOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-10">
          {brands.map((brand, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedBrand(brand);
                setIsBrandsOpen(false); // Close dropdown after selecting brand
              }}
              className="block w-full text-left px-5 py-2 text-[#0A141B] hover:bg-[#FF7477] transition"
            >
              {brand}
            </button>
          ))}
          <button
            onClick={() => {
              setSelectedBrand('');
              setIsBrandsOpen(false);
            }}
            className="block w-full text-left px-5 py-2 text-[#0A141B] hover:bg-[#FF7477] transition"
          >
            All Brands
          </button>
        </div>
      )}
    </div>
  );
};

export default BrandFilter;
