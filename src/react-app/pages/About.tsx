import { Award, Users, Clock, Globe, Target, Heart, Sparkles } from 'lucide-react';
import { ScrollAnimation, StaggerContainer, StaggerItem, Parallax } from '@/react-app/components/ScrollAnimation';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { icon: Users, value: '1000+', label: 'Happy Clients', color: 'from-indigo-500 to-purple-500' },
    { icon: Clock, value: '10+', label: 'Years Experience', color: 'from-pink-500 to-rose-500' },
    { icon: Award, value: '50K+', label: 'Images Edited', color: 'from-orange-500 to-amber-500' },
    { icon: Globe, value: '30+', label: 'Countries Served', color: 'from-green-500 to-emerald-500' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'We maintain the highest standards of quality in every project, ensuring each image is meticulously edited to perfection.',
    },
    {
      icon: Target,
      title: 'Accuracy',
      description: 'Precision and attention to detail are at the core of our work. We deliver exactly what you envision.',
    },
    {
      icon: Heart,
      title: 'Client Satisfaction',
      description: 'Your satisfaction is our priority. We work closely with you to exceed your expectations every time.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Lead Editor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Retoucher',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Emily Davis',
      role: 'Color Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    },
    {
      name: 'David Martinez',
      role: 'Real Estate Expert',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation direction="down" delay={0}>
            <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Since 2013</span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              About <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Us</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A decade of excellence in professional photo editing and retouching services
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.15}>
            {stats.map((stat, index) => (
              <StaggerItem key={index} direction="scale" className="text-center group">
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
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

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="right" delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Our <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Story</span>
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
                  <p>
                    Founded in 2013, UNIQUE PICS began with a simple mission: to help photographers and businesses transform their images into stunning visual masterpieces.
                  </p>
                  <p>
                    Over the past decade, we've grown from a small team of passionate editors to a globally recognized photo editing service, working with clients from over 30 countries.
                  </p>
                  <p>
                    Our experienced professional editors bring years of expertise and artistic vision to every project, ensuring that each image receives the attention and care it deserves.
                  </p>
                  <p>
                    Today, we continue to push the boundaries of what's possible in photo editing, combining cutting-edge technology with timeless artistic principles to deliver exceptional results.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={0.4}>
              <div className="relative">
                <Parallax speed={0.3}>
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Team working"
                    className="rounded-2xl shadow-2xl"
                  />
                </Parallax>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl max-w-xs"
                >
                  <p className="text-2xl font-bold mb-2">10+ Years</p>
                  <p className="text-sm">of delivering excellence in photo editing services</p>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="fade" className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              "Delivering high-quality, consistent, and reliable image editing services with a customer-first focus. We strive to exceed expectations in every project, building lasting relationships through exceptional quality and service."
            </p>
          </ScrollAnimation>

          {/* Core Values */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index} direction="up" className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover-lift text-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-2xl mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="fade" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Meet Our <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to bringing your vision to life
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <StaggerItem key={index} direction="up" className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover-lift">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6 text-center -mt-20 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-gray-200 text-sm">{member.role}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="fade" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">UNIQUE PICS</span>
            </h2>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.1}>
            {[
              'Experienced professional editors with 10+ years in the industry',
              'Fast delivery without compromising on quality',
              'Work with global clients across 30+ countries',
              'Competitive pricing with flexible packages',
              '24/7 customer support for your convenience',
              'Free trial to experience our quality firsthand',
              'Satisfaction guaranteed on every project',
              'State-of-the-art editing tools and techniques',
            ].map((feature, index) => (
              <StaggerItem key={index} direction="left" className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-1"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">{feature}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
