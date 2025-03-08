import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Salon_DEMO</h2>
            <p className="text-lg text-gray-600 mb-8">
              Step into our contemporary sanctuary where style meets serenity. At StyleHub, we believe in creating an inclusive space where everyone can discover their perfect look. Our team of expert stylists combines years of experience with the latest trends to deliver exceptional results tailored to your unique personality.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
                <p className="text-gray-600">Skilled professionals with years of industry experience</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Products</h3>
                <p className="text-gray-600">Using only the finest hair care products and tools</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Space</h3>
                <p className="text-gray-600">Contemporary salon with comfortable amenities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
