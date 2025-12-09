import { useState } from 'react';
import { Upload, CheckCircle, AlertCircle, Sparkles, Gift } from 'lucide-react';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/react-app/components/ScrollAnimation';
import { motion } from 'framer-motion';

export default function FreeTrial() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Here you would typically send the email to your backend
    console.log('Free trial requested for:', email);
    setIsSubmitted(true);
    setError('');
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 5000);
  };

  const features = [
    'Professional editing by experienced editors',
    'Fast 24-48 hour turnaround',
    'No credit card required',
    'No hidden fees or obligations',
    '1-3 images edited for free',
    'Full-resolution delivery',
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Fill out the form with your email to get started',
    },
    {
      number: '02',
      title: 'Upload Images',
      description: "We'll send you instructions to upload 1-3 sample images",
    },
    {
      number: '03',
      title: 'Specify Requirements',
      description: 'Tell us what edits you need on your images',
    },
    {
      number: '04',
      title: 'Receive Edited Images',
      description: 'Get your professionally edited images within 24-48 hours',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation direction="down" delay={0}>
            <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg">
              <Gift className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Limited Time Offer</span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Try Our <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Free Sample</span> Editing
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the UNIQUE PICS difference with a complimentary edit of 1-3 images. No credit card required, no obligations.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="scale" className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 md:p-12 rounded-3xl shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Request Received!</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
                  Thank you for your interest in our free trial.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Check your email for instructions on how to upload your sample images.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Get Your Free Sample Edit</h2>
                  <p className="text-gray-600 dark:text-gray-400">Enter your email to receive upload instructions</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      className={`w-full px-4 py-4 rounded-xl border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${
                        error ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                      } focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors text-lg`}
                      placeholder="your@email.com"
                    />
                    {error && (
                      <div className="mt-2 flex items-center space-x-2 text-red-600">
                        <AlertCircle className="w-4 h-4" />
                        <p className="text-sm">{error}</p>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Upload className="w-5 h-5" />
                    <span>Get Free Sample Edit</span>
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    By submitting this form, you agree to our terms and privacy policy.
                    <br />
                    We'll never share your email with third parties.
                  </p>
                </div>
              </>
            )}
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="fade" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What's <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Included</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our free trial gives you a complete taste of our professional editing services
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <StaggerItem key={index} direction="left" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-center space-x-4 w-full"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{feature}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="fade" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How It <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Works</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simple and straightforward process to get your free sample
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={index} direction="scale" className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200"></div>
                )}
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                    className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full text-white text-2xl font-bold mb-4 shadow-lg z-10"
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="fade" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Frequently Asked <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Questions</span>
            </h2>
          </ScrollAnimation>

          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {[
              {
                question: 'How many images can I submit for the free trial?',
                answer: 'You can submit 1-3 images for our free sample editing service.',
              },
              {
                question: 'What types of edits are included?',
                answer: 'Our free trial includes basic to advanced edits such as retouching, color correction, background removal, and more - depending on your specific needs.',
              },
              {
                question: 'How long does it take to receive my edited images?',
                answer: 'Typically, you will receive your edited images within 24-48 hours after submitting your requirements.',
              },
              {
                question: 'Is there really no credit card required?',
                answer: 'Absolutely! Our free trial requires no credit card, no payment information, and comes with zero obligations.',
              },
              {
                question: 'What happens after the free trial?',
                answer: 'After reviewing your edited samples, you can choose to continue with our paid services or simply walk away - no pressure!',
              },
            ].map((faq, index) => (
              <StaggerItem key={index} direction="up" className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <motion.div
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
