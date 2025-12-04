import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  duration?: number;
  distance?: number;
}

export function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  distance = 50,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionMap = {
    up: { y: distance, x: 0, scale: 1 },
    down: { y: -distance, x: 0, scale: 1 },
    left: { y: 0, x: distance, scale: 1 },
    right: { y: 0, x: -distance, scale: 1 },
    fade: { y: 0, x: 0, scale: 1 },
    scale: { y: 0, x: 0, scale: 0.8 },
  };

  const initial = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: initial.y,
        x: initial.x,
        scale: initial.scale,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: initial.y,
              x: initial.x,
              scale: initial.scale,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({ children, className = '', speed = 0.5 }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
}: StaggerItemProps) {
  const directionMap = {
    up: { y: 30, x: 0, scale: 1 },
    down: { y: -30, x: 0, scale: 1 },
    left: { y: 0, x: 30, scale: 1 },
    right: { y: 0, x: -30, scale: 1 },
    fade: { y: 0, x: 0, scale: 1 },
    scale: { y: 0, x: 0, scale: 0.8 },
  };

  const initial = directionMap[direction];

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: initial.y,
          x: initial.x,
          scale: initial.scale,
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className = '' }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 origin-left z-50 ${className}`}
      style={{ scaleX }}
    />
  );
}

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export function RevealOnScroll({
  children,
  className = '',
  threshold = 0.2,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

