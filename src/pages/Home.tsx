import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  {
    url: "/images/DEMO_images/herosection1.jpg",
    alt: "Modern Salon Interior"
  },
  {
    url: "/images/DEMO_images/herosection2.jpg",
    alt: "Hair Styling Session"
  },
  {
    url: "/images/DEMO_images/herosection3.jpg",
    alt: "Premium Hair Products"
  }
];

const services = [
  {
    image: "/images/DEMO_images/haircut.jpg",
    title: "Precision Cuts",
    description: "Expert haircuts tailored to your face shape and style preferences"
  },
  {
    image: "/images/DEMO_images/highlight.jpg",
    title: "Color & Highlights",
    description: "Professional coloring services using premium products"
  },
  {
    image: "/images/DEMO_images/treatment.jpg",
    title: "Treatments",
    description: "Luxury hair treatments for ultimate hair health"
  }
];

const products = [
  {
    image: "/images/DEMO_images/shampoo.jpg",
    title: "Luxury Shampoo",
    description: "Enriched with natural ingredients for silky, healthy hair"
  },
  {
    image: "/images/DEMO_images/serum.jpg",
    title: "Revitalizing Serum",
    description: "Advanced formula for frizz control and shine"
  },
  {
    image: "/images/DEMO_images/collection.jpg",
    title: "Styling Collection",
    description: "Professional-grade products for lasting styles"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Transform Your Style with Expert Care
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Experience premium hair care services in a luxurious and welcoming atmosphere
              </p>
              <a
                href="/appointment"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
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
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
        <button 
  onClick={() => window.location.href = '#/services'}
  className="px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 transition"
>
  Show More
</button>
        </div>
      </div>
    </section>

      {/* Products Section */}
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
        <div className="text-center mt-12">
        <button 
  onClick={() => window.location.href = '#/products'}
  className="px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 transition"
>
  Show More
</button>
        </div>
      </div>
    </section>


     {/* Client Reviews Section */}
     <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Celia Almeda",
                role: "Secretary",
                review: "Absolutely love the service! My hair has never felt better.",
                rating: 5,
                image: "/images/DEMO_images/1.png"
              },
              {
                name: "Nat Reynolds",
                role: "Chief Accountant",
                review: "Professional stylists and a relaxing atmosphere! Highly recommend.",
                rating: 4,
                image: "/images/DEMO_images/2.png"
              },
              {
                name: "Bob Roberts",
                role: "Sales Manager",
                review: "Great experience every time. The products are top-notch!",
                rating: 5,
                image: "/images/DEMO_images/3.png"
              }
            ].map((client, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg text-center">
                <img src={client.image} alt={client.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{client.name}</h3>
                <p className="text-gray-600 text-sm">{client.role}</p>
                <p className="text-gray-700 mt-4">"{client.review}"</p>
                <div className="flex justify-center mt-3">
                  {[...Array(client.rating)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-500 text-xl">★</span>
                  ))}
                  {[...Array(5 - client.rating)].map((_, starIndex) => (
                    <span key={starIndex} className="text-gray-300 text-xl">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-600">Open 7 days a week from 9AM to 8PM</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-600">Easy to reach with free parking</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Online Booking</h3>
              <p className="text-gray-600">Schedule your visit 24/7</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional consultation available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 








