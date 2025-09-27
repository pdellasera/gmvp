import React from 'react';
import { useDeviceDetector } from '../../../hooks/useDeviceDetection';
import MobileCustomerServiceView from './mobile/MobileCustomerServiceWiew';
import WebCustomerServiceView from './web/WebCustomerServiceView';




const SwitcherLoginView: React.FC = () => {
  const { isMobile, isTablet } = useDeviceDetector();

  if (isMobile || isTablet) {
    return <MobileCustomerServiceView />;
  }

  return <WebCustomerServiceView/>;
};

export default SwitcherLoginView;