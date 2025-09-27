// Configuraciones de animaciones estándar para toda la aplicación
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 60 
  },
  animate: { 
    opacity: 1, 
    y: 0 
  },
  transition: { 
    duration: 0.8, 
    ease: "easeOut" as const 
  }
};

export const fadeInDown = {
  initial: { 
    opacity: 0, 
    y: -60 
  },
  animate: { 
    opacity: 1, 
    y: 0 
  },
  transition: { 
    duration: 0.8, 
    ease: "easeOut" as const 
  }
};

export const fadeInLeft = {
  initial: { 
    opacity: 0, 
    x: -60 
  },
  animate: { 
    opacity: 1, 
    x: 0 
  },
  transition: { 
    duration: 0.8, 
    ease: "easeOut" as const 
  }
};

export const fadeInRight = {
  initial: { 
    opacity: 0, 
    x: 60 
  },
  animate: { 
    opacity: 1, 
    x: 0 
  },
  transition: { 
    duration: 0.8, 
    ease: "easeOut" as const 
  }
};

export const scaleIn = {
  initial: { 
    opacity: 0, 
    scale: 0.8 
  },
  animate: { 
    opacity: 1, 
    scale: 1 
  },
  transition: { 
    duration: 0.6, 
    ease: "easeOut" as const 
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const 
    }
  }
};

export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" as const 
    }
  },
  whileTap: { 
    scale: 0.95 
  }
};

export const hoverLift = {
  whileHover: { 
    y: -8,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" as const 
    }
  }
};

export const smoothEasing = "easeOut" as const;

export const pageTransition = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" as const 
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" as const 
    }
  }
};
