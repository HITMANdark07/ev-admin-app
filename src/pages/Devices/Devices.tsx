import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
const products = [
    {
      id: 1,
      name: 'KOL345',
      href: '#',
      imageSrc: 'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹35/min',
    },
    {
        id: 2,
        name: 'KOL445',
        href: '#',
        imageSrc: 'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹30/min',
    },
    {
        id: 3,
        name: 'KOL645',
        href: '#',
        imageSrc: 'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹20/min',
    },
    {
        id: 4,
        name: 'KOL745',
        href: '#',
        imageSrc: 'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹25/min',
    },
    {
        id: 5,
        name: 'KOL745',
        href: '#',
        imageSrc: 'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹20/min',
    },
    {
        id: 6,
        name: 'KOL755',
        href: '#',
        imageSrc: 'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹25/min',
    },

    // More products...
  ]

const Devices = () => {

    
  return (
    <div>
      <Sidebar activeMenu="Dashboard" />
      <div style={{ marginLeft: "16rem" }}>
        <Header />
        <div style={{width:'90%', marginLeft:'5%'}}>
          <div className="font-bold text-xl tracking-wide my-2">DEVICES</div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative border-neutral-800">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
