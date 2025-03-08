import React from "react";

interface Service {
  image: string;
  title: string;
  description: string;
  duration: string;
  price: string;
}

const services: Service[] = [
  {
    image: "/images/DEMO_images/haircut.jpg",
    title: "Precision Cuts",
    description: "Expert haircuts tailored to your face shape and style preferences.",
    duration: "45 mins",
    price: "₹500"
  },
  {
    image: "/images/DEMO_images/highlight.jpg",
    title: "Color & Highlights",
    description: "Professional coloring services using premium products.",
    duration: "1.5 hrs",
    price: "₹1500"
  },
  {
    image: "/images/DEMO_images/treatment.jpg",
    title: "Hair Treatments",
    description: "Luxury hair treatments for ultimate hair health.",
    duration: "1 hr",
    price: "₹1200"
  },
  {
    image: "/images/DEMO_images/manicure&pedicure.jpg",
    title: "Manicure & Pedicure",
    description: "Professional nail care for clean and stylish hands and feet.",
    duration: "1 hr",
    price: "₹800"
  },
  {
    image: "/images/DEMO_images/facial_treatment.jpg",
    title: "Facial Glow Therapy",
    description: "Refreshing skin treatment for a radiant complexion.",
    duration: "1 hr",
    price: "₹1000"
  },
  {
    image: "/images/DEMO_images/pimple_treatment.jpg",
    title: "Acne Clear Treatment",
    description: "Targeted solution for clear and healthy skin.",
    duration: "45 mins",
    price: "₹1200"
  },
  {
    image: "/images/DEMO_images/SkinPolishing.jpg",
    title: "Radiance Skin Polishing",
    description: "Exfoliating treatment for smooth and glowing skin.",
    duration: "1 hr",
    price: "₹1300"
  },
  {
    image: "/images/DEMO_images/BodySpa.jpg",
    title: "Luxury Body Spa",
    description: "Relaxing full-body spa for stress relief and rejuvenation.",
    duration: "2 hrs",
    price: "₹2500"
  },
  {
    image: "/images/DEMO_images/BodyMassage.jpg",
    title: "Deep Tissue Massage",
    description: "Therapeutic massage to ease tension and improve circulation.",
    duration: "1.5 hrs",
    price: "₹1800"
  },
  {
    image: "/images/DEMO_images/Waxing.jpg",
    title: "Silky Smooth Waxing",
    description: "Smooth hair removal for long-lasting results.",
    duration: "30 mins",
    price: "₹600"
  },
  {
    image: "/images/DEMO_images/SkinBleach.jpg",
    title: "Glow Boost Bleach",
    description: "Skin brightening treatment for an even complexion.",
    duration: "30 mins",
    price: "₹500"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-200 mb-2">{service.description}</p>
                  <p className="text-yellow-400 font-bold">Duration: {service.duration}</p>
                  <p className="text-green-400 font-bold">Price: {service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
