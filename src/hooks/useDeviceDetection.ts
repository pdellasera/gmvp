import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  isSafari: boolean;
  isChrome: boolean;
  isFirefox: boolean;
  isEdge: boolean;
}

export const useDeviceDetector = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isIOS: false,
    isAndroid: false,
    isSafari: false,
    isChrome: false,
    isFirefox: false,
    isEdge: false,
  });

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const { innerWidth, innerHeight } = window;

      // Detectar sistema operativo
      const isIOS = /iphone|ipad|ipod/.test(userAgent);
      const isAndroid = /android/.test(userAgent);

      // Detectar navegador
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      const isChrome = /chrome/.test(userAgent) && !/edge/.test(userAgent);
      const isFirefox = /firefox/.test(userAgent);
      const isEdge = /edge/.test(userAgent);

      // Detectar tipo de dispositivo basado en tamaño de pantalla y user agent
      // Considerar dispositivos móviles hasta 768px, tablets hasta 1024px, desktop > 1024px
      
      // Detectar iPad específicamente
      const isIPad = /ipad/.test(userAgent) || (isIOS && innerWidth > 768 && innerWidth <= 1024);
      
      // Detectar iPhone específicamente
      const isIPhone = /iphone|ipod/.test(userAgent) || (isIOS && innerWidth <= 768);
      
      // Lógica de detección mejorada y más robusta
      let isMobile = false;
      let isTablet = false;
      let isDesktop = false;

      if (innerWidth <= 768) {
        isMobile = true;
      } else if (innerWidth > 768 && innerWidth <= 1024) {
        isTablet = true;
      } else {
        isDesktop = true;
      }

      // Override basado en user agent para casos especiales
      if (isIPhone) {
        isMobile = true;
        isTablet = false;
        isDesktop = false;
      } else if (isIPad) {
        isMobile = false;
        isTablet = true;
        isDesktop = false;
      }

      const deviceInfo = {
        isMobile,
        isTablet,
        isDesktop,
        isIOS,
        isAndroid,
        isSafari,
        isChrome,
        isFirefox,
        isEdge,
      };

      // Debug: Log de detección
      console.log('📱 Device Detection:', {
        userAgent: navigator.userAgent,
        innerWidth,
        innerHeight,
        isIPad,
        isIPhone,
        isMobile,
        isTablet,
        isDesktop,
        isIOS,
        isAndroid
      });

      setDeviceInfo(deviceInfo);
    };

    // Detectar inicialmente
    detectDevice();

    // Detectar en cambios de tamaño de ventana con debounce
    let timeoutId: number;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(detectDevice, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return deviceInfo;
};
