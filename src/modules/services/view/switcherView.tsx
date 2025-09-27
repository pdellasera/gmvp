import React from 'react';
import { useDeviceDetector } from '../../../hooks/useDeviceDetection';
import MobileServiceView from './mobile/MobileServiceView';
import WebServiceView from './web/WebServiceView';



const SwitcherLoginView: React.FC = () => {
  const { isMobile, isTablet } = useDeviceDetector();

  if (isMobile || isTablet) {
    return <MobileServiceView />;
  }

  return <WebServiceView/>;
};

export default SwitcherLoginView;