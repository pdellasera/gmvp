import React from 'react';
import { Outlet } from 'react-router-dom';
import MobileHeader from './MobileHeader';
import MobileFooter from '../MobileFooter';
import { ChatProvider } from '../../contexts/ChatContext';
import ChatBubble from '../ChatBubble';
import { useChat } from '../../contexts/ChatContext';

const MobileLayoutContent: React.FC = () => {
    const { isChatOpen, closeChat } = useChat();

    return (
        <div className="min-h-screen bg-white">
            {/* Mobile Header */}
            <MobileHeader />
            
            {/* Main Content Area */}
            <main>
                <Outlet />
            </main>
            
            {/* Fixed Mobile Footer */}
            <MobileFooter />
            
            {/* Chat Bubble */}
            <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
        </div>
    );
};

const MobileLayout: React.FC = () => {
    return (
        <ChatProvider>
            <MobileLayoutContent />
        </ChatProvider>
    );
};

export default MobileLayout;
