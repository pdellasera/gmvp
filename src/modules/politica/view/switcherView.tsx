import React from 'react';
import { useDeviceDetector } from '../../../hooks/useDeviceDetection';
import MobilePoliticaView from './mobile/MobilePoliticaView';
import WebPoliticaView from './web/WebPoliticaView';



const SwitcherLoginView: React.FC = () => {
  const { isMobile, isTablet } = useDeviceDetector();

  if (isMobile || isTablet) {
    return <MobilePoliticaView />;
  }

  return <WebPoliticaView/>;
};

export default SwitcherLoginView;