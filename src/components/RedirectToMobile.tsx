import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDeviceDetector } from '../hooks/useDeviceDetection';

const RedirectToMobile: React.FC = () => {
    const { isMobile, isTablet } = useDeviceDetector();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isMobile || isTablet) {
            const currentPath = location.pathname;
            const mobilePath = currentPath === '/' ? '/mobile/' : `/mobile${currentPath}`;
            navigate(mobilePath, { replace: true });
        }
    }, [isMobile, isTablet, location.pathname, navigate]);

    return null;
};

export default RedirectToMobile;
