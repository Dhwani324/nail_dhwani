// import React from "react";

// interface Product {
//   image: string;
//   title: string;
//   description: string;
// }

// const products: Product[] = [
//     {
//         image: "/images/DEMO_images/shampoo.jpg",
//         title: "Luxury Shampoo",
//         description: "Enriched with natural ingredients for silky, healthy hair"
//       },
//       {
//         image: "/images/DEMO_images/serum.jpg",
//         title: "Revitalizing Serum",
//         description: "Advanced formula for frizz control and shine"
//       },
//       {
//         image: "/images/DEMO_images/collection.jpg",
//         title: "Styling Collection",
//         description: "Professional-grade products for lasting styles"
//       },
//       {
//         image: "/images/DEMO_images/FaceWash.jpg",
//         title: "FaceWash",
//         description: "Gentle cleanser for fresh and clear skin"
//       },
//       {
//         image: "/images/DEMO_images/HairMask.jpg",
//         title: "Hair Mask",
//         description: "Deep conditioning treatment for nourished hair"
//       },
//       {
//         image: "/images/DEMO_images/FaceMask.jpg",
//         title: "Face Mask",
//         description: "Rejuvenating mask for a healthy, glowing complexion"
//       }
// ];

// const Products: React.FC = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Products</h2>
//         <div className="grid md:grid-cols-3 gap-12">
//           {products.map((product, index) => (
//             <div key={index} className="relative group overflow-hidden rounded-lg">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                   <h3 className="text-2xl font-semibold text-white mb-3">{product.title}</h3>
//                   <p className="text-gray-200">{product.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;
    




import React from "react";

interface Product {
  image: string;
  title: string;
  description: string;
  
}

const products: Product[] = [
    {
        image: "/images/DEMO_images/shampoo.jpg",
        title: "Luxury Shampoo",
        description: "Enriched with natural ingredients for silky, healthy hair.",
      },
      {
        image: "/images/DEMO_images/serum.jpg",
        title: "Revitalizing Serum",
        description: "Advanced formula for frizz control and shine.",
      },
      {
        image: "/images/DEMO_images/collection.jpg",
        title: "Package",
        description: "Professional-grade products for lasting styles.",
      },
      {
        image: "/images/DEMO_images/FaceWash.jpg",
        title: "FaceWash",
        description: "Gentle cleanser for fresh and clear skin.",
      },
      {
        image: "/images/DEMO_images/HairMask.jpg",
        title: "Hair Mask",
        description: "Deep conditioning treatment for nourished hair.",
      },
      {
        image: "/images/DEMO_images/FaceMask.jpg",
        title: "Face Mask",
        description: "Rejuvenating mask for a healthy, glowing complexion.",
      }
];

const Products: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-200">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;