import { Award, Users, Clock, Globe, Target, Heart, Sparkles } from 'lucide-react';

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
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">Since 2013</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient from-indigo-600 to-purple-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A decade of excellence in professional photo editing and retouching services
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient from-indigo-600 to-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient from-indigo-600 to-purple-600">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2013, PixelPerfect Studio began with a simple mission: to help photographers and businesses transform their images into stunning visual masterpieces.
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
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Team working"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-2xl font-bold mb-2">10+ Years</p>
                <p className="text-sm">of delivering excellence in photo editing services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient from-indigo-600 to-purple-600">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              "Delivering high-quality, consistent, and reliable image editing services with a customer-first focus. We strive to exceed expectations in every project, building lasting relationships through exceptional quality and service."
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover-lift text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-gradient from-indigo-600 to-purple-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 text-center -mt-20 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gray-200 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-gradient from-indigo-600 to-purple-600">PixelPerfect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
