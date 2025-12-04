import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Zap, Users, Award, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-20"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="fade-in-element opacity-0">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-gray-700">Professional Editing Since 2013</span>
            </div>
          </div>

          <h1 className="fade-in-element opacity-0 text-5xl md:text-7xl font-bold mb-6" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-['Playfair_Display']">
              Professional Photo Editing
            </span>
            <br />
            <span className="text-gray-800">& Retouching Services</span>
          </h1>

          <p className="fade-in-element opacity-0 text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            Fashion Portraits, Real Estate Images, Panorama, Clipping Path & More
          </p>

          <p className="fade-in-element opacity-0 text-lg text-gray-500 mb-12 max-w-2xl mx-auto" style={{ animationDelay: '0.6s' }}>
            We provide high-quality, fast and reliable photo editing services for photographers, studios, e-commerce brands, real-estate agencies, and more.
          </p>

          <div className="fade-in-element opacity-0 flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/free-trial"
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-indigo-200"
            >
              Try Free Sample
            </Link>
          </div>

          {/* Stats */}
          <div className="fade-in-element opacity-0 grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto" style={{ animationDelay: '1s' }}>
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '50K+', label: 'Images Edited' },
              { value: '1000+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient from-indigo-600 to-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-gradient from-indigo-600 to-purple-600">PixelPerfect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with artistic expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Quick turnaround times without compromising quality. Get your edited photos within 24-48 hours.',
                color: 'from-yellow-500 to-orange-500',
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Our experienced professionals have edited over 50,000 images for clients worldwide.',
                color: 'from-indigo-500 to-purple-500',
              },
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'Industry-leading quality standards. Every image is meticulously edited to perfection.',
                color: 'from-pink-500 to-rose-500',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="fade-in-element opacity-0 group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover-lift border border-gray-100"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient from-indigo-600 to-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive photo editing solutions for every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              'Fashion Portrait Enhancement',
              'Background Removal & Replacement',
              'Real Estate Photo Editing',
              'Panorama & 360° Stitching',
              'Image Retouching & Manipulation',
              'Color & Light Correction',
            ].map((service, index) => (
              <div
                key={index}
                className="fade-in-element opacity-0 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center space-x-4 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Images?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Try our service with a free sample and experience the PixelPerfect difference
          </p>
          <Link
            to="/free-trial"
            className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            <span>Get Your Free Sample</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
