import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/react-app/components/ScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'before-after', label: 'Before & After' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'clipping', label: 'Clipping Path' },
    { id: 'panorama', label: 'Panorama' },
  ];

  const portfolioItems = [
    {
      category: 'before-after',
      before: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80',
      title: 'Fashion Portrait Retouching',
      description: 'Professional skin retouching and color enhancement',
    },
    {
      category: 'real-estate',
      before: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      title: 'Modern Living Room',
      description: 'HDR blending and color correction',
    },
    {
      category: 'portraits',
      before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
      title: 'Corporate Headshot',
      description: 'Professional retouching and background enhancement',
    },
    {
      category: 'clipping',
      before: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80',
      title: 'Product Photography',
      description: 'Background removal and shadow creation',
    },
    {
      category: 'panorama',
      before: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      title: 'Mountain Panorama',
      description: 'Seamless stitching and color grading',
    },
    {
      category: 'before-after',
      before: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
      title: 'Beauty Retouching',
      description: 'Advanced skin retouching and makeup enhancement',
    },
    {
      category: 'real-estate',
      before: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
      title: 'Luxury Home Exterior',
      description: 'Sky replacement and lighting enhancement',
    },
    {
      category: 'portraits',
      before: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
      title: 'Studio Portrait',
      description: 'Professional color grading and retouching',
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredItems.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation direction="down" delay={0}>
            <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Our Best Work</span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              <span className="text-gradient from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Portfolio</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our collection of professionally edited images across various categories
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white dark:bg-gray-900 py-8 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {filteredItems.map((item, index) => (
              <StaggerItem key={index} direction="up" className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover-lift">
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => setSelectedImage(index)}
                >
                  {/* Before/After Slider */}
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 overflow-hidden">
                        <motion.img
                          src={item.before}
                          alt={`${item.title} - Before`}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <div className="w-1/2 overflow-hidden">
                        <motion.img
                          src={item.after}
                          alt={`${item.title} - After`}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-xl -ml-0.5 z-10"></div>
                    
                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      After
                    </div>

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center"
                    >
                      <div className="text-white text-lg font-semibold">View Details</div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredItems.length === 0 && (
            <ScrollAnimation direction="fade" className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-xl">No items found in this category</p>
            </ScrollAnimation>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              disabled={selectedImage === 0}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
            >
              <ChevronLeft className="w-12 h-12" />
            </motion.button>

            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              disabled={selectedImage === filteredItems.length - 1}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
            >
              <ChevronRight className="w-12 h-12" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <img
                    src={filteredItems[selectedImage].before}
                    alt="Before"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                    Before
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <img
                    src={filteredItems[selectedImage].after}
                    alt="After"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                    After
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mt-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-2">{filteredItems[selectedImage].title}</h3>
                <p className="text-gray-300">{filteredItems[selectedImage].description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
