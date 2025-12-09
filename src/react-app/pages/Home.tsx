import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Zap, Users, Award, Sparkles } from 'lucide-react';
import { ScrollAnimation, Parallax, StaggerContainer, StaggerItem } from '@/react-app/components/ScrollAnimation';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
        {/* Animated Background Elements with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <Parallax speed={0.3}>
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          </Parallax>
          <Parallax speed={0.5}>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          </Parallax>
          <Parallax speed={0.4}>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
          </Parallax>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollAnimation direction="down" delay={0}>
            <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Professional Editing Since 2013</span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-['Playfair_Display']">
                Professional Photo Editing
              </span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">& Retouching Services</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
              Fashion Portraits, Real Estate Images, Panorama, Clipping Path & More
            </p>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.6}>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              We provide high-quality, fast and reliable photo editing services for photographers, studios, e-commerce brands, real-estate agencies, and more.
            </p>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </ScrollAnimation>

          {/* Stats with Stagger Animation */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '50K+', label: 'Images Edited' },
              { value: '1000+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <StaggerItem key={index} direction="scale" className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="fade" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">UNIQUE PICS</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with artistic expertise to deliver exceptional results
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
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
              <StaggerItem key={index} direction="up" className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover-lift border border-gray-100 dark:border-gray-700">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="fade" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive photo editing solutions for every need
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" staggerDelay={0.1}>
            {[
              'Fashion Portrait Enhancement',
              'Background Removal & Replacement',
              'Real Estate Photo Editing',
              'Panorama & 360° Stitching',
              'Image Retouching & Manipulation',
              'Color & Light Correction',
            ].map((service, index) => (
              <StaggerItem key={index} direction="left" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center space-x-4 group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-center space-x-4 w-full"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{service}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollAnimation direction="scale" className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation direction="fade" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Images?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="fade" delay={0.4}>
            <p className="text-xl mb-10 text-white/90">
              Try our service with a free sample and experience the UNIQUE PICS difference
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="scale" delay={0.6}>
            <Link
              to="/free-trial"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <span>Get Your Free Sample</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
