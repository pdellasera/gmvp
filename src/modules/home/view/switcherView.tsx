import React from 'react';
import { useDeviceDetector } from '../../../hooks/useDeviceDetection';
import MobileHomeView from '../../../modules/home/view/mobile/MobileHomeView';
import WebHomeView from './web/WebHomeView';



const SwitcherLoginView: React.FC = () => {
  const { isMobile, isTablet } = useDeviceDetector();

  if (isMobile || isTablet) {
    return <MobileHomeView />;
  }

  return <WebHomeView/>;
};

export default SwitcherLoginView;