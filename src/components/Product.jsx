import React, { useState } from 'react';
import Navbar from './Nav';

export default function Product() {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const categories = [
    {
      label: 'Ethnic Wear',
      items: [
        'CulturalAttire',
        'DiwaliGlamour',
        'IndianFashion',
        'FestiveWear',
	      'DiwaliOOTD',
	
        // ...other items for Ethnic Wear
      ]
    },
    {
      items: [
        'Saree',
        'Salwar Kameez',
        'Anarkali Suit',
        'Ghaghara/Lehenga Choli',
	      'Palazzo Suit',
        '	Kurta Pajama',
        'Sherwani',
        'Bandh gala',
        'Nehru Jacket',
	

        // ...other items for Ethnic Wear
      ]
    },
    {
      label: 'Footwear',
      items: [
        // ...items for Seasonal Fashion
      ]
    },
    {
      label: 'Workwear',
      items: [
        // ...items for Seasonal Fashion
      ]
    },
    {
      label: 'Sportswear',
      items: [
        // ...items for Seasonal Fashion
      ]
    },
    {
      label: 'Urbanwear',
      items: [
        // ...items for Seasonal Fashion
      ]
    },
    {
      label: 'Innerwear',
      items: [
        // ...items for Seasonal Fashion
      ]
    },
    {
      label: 'Seasonal Fashion (FourSeasonsFashion)',
      items: [
        // ...items for Seasonal Fashion
      ]
    },
    {
      label: 'Casual Fashion',
      items: [
        // ...items for Casual Fashion
      ]
    },
    {
      label: 'Hand Accesories',
      items: [
        // ...items for Casual Fashion
      ]
    },
    {
      label: 'Hair Accesories',
      items: [
        // ...items for Casual Fashion
      ]
    },

    // ...other categories
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index); // Open the clicked dropdown, or close if it's already open
  };

  return (
    <div>
      <Navbar />
      {/* <h1>Product Categories</h1>
      {categories.map((category, index) => (
        <div className="p-2 relative inline-block text-left" key={index}>
          <button
            id={`dropdownDefaultButton${index}`}
            data-dropdown-toggle={`dropdown${index}`}
            className="p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => toggleDropdown(index)}
          >
            {category.label || 'Category'} <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
          </button>
          {openDropdown === index && (
            <div
              id={`dropdown${index}`}
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`dropdownDefaultButton${index}`}>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))} */}

          
    </div>
  );
}