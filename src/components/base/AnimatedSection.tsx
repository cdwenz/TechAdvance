
import { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animations = {
    fadeUp: {
      hidden: 'opacity-0 translate-y-12',
      visible: 'opacity-100 translate-y-0',
    },
    fadeDown: {
      hidden: 'opacity-0 -translate-y-12',
      visible: 'opacity-100 translate-y-0',
    },
    fadeLeft: {
      hidden: 'opacity-0 translate-x-12',
      visible: 'opacity-100 translate-x-0',
    },
    fadeRight: {
      hidden: 'opacity-0 -translate-x-12',
      visible: 'opacity-100 translate-x-0',
    },
    scale: {
      hidden: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100',
    },
    fade: {
      hidden: 'opacity-0',
      visible: 'opacity-100',
    },
  };

  const currentAnimation = animations[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className} ${
        isVisible ? currentAnimation.visible : currentAnimation.hidden
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
