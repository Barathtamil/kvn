import { Camera, Scissors, Home, ScanEye, Wand2, Palette, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: 'Fashion Portrait Enhancement',
      description: 'Transform fashion portraits with professional retouching, skin smoothing, color grading, and detail enhancement. Perfect for models, influencers, and fashion brands.',
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Scissors,
      title: 'Background Removal & Replacement',
      description: 'Precise clipping paths and background removal services for e-commerce, product photography, and creative projects. Fast turnaround with pixel-perfect results.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Home,
      title: 'Real Estate Photo Editing',
      description: 'Make properties shine with HDR blending, virtual staging, sky replacement, and perspective correction. Attract more buyers with stunning visuals.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ScanEye,
      title: 'Panorama & 360° Stitching',
      description: 'Seamless panoramic image stitching and 360-degree photo editing for virtual tours, real estate, and immersive experiences.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Wand2,
      title: 'Image Retouching & Manipulation',
      description: 'Advanced retouching, object removal, photo restoration, and creative manipulations. Bring your creative vision to life with expert editing.',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Palette,
      title: 'Color & Light Correction',
      description: 'Professional color grading, white balance correction, exposure adjustment, and mood enhancement to make your photos pop.',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80',
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">Comprehensive Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient from-indigo-600 to-purple-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional photo editing services tailored to meet your specific needs. From portraits to real estate, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                  >
                    Get Started
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient from-indigo-600 to-purple-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and efficient workflow
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Upload', description: 'Send us your images through our secure platform' },
              { step: '02', title: 'Brief', description: 'Specify your editing requirements and preferences' },
              { step: '03', title: 'Edit', description: 'Our experts work their magic on your photos' },
              { step: '04', title: 'Deliver', description: 'Receive your perfectly edited images' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full text-white text-2xl font-bold mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Try our service with a free sample or contact us for a custom quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/free-trial"
              className="px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
