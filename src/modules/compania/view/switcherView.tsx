import React from 'react';
import { useDeviceDetector } from '../../../hooks/useDeviceDetection';
import MobileCompaniaView from './mobile/MobileCompaniaView';
import WebCompaniaView from './web/WebCompaniaView';



const SwitcherLoginView: React.FC = () => {
  const { isMobile, isTablet } = useDeviceDetector();

  if (isMobile || isTablet) {
    return <MobileCompaniaView />;
  }

  return <WebCompaniaView/>;
};

export default SwitcherLoginView;