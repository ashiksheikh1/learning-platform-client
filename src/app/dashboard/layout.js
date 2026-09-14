import { DashboardSidebar } from '@/components/Dashboard/DashboardSidebar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex-1 flex overflow-hidden h-screen bg-background'>
           <div> <DashboardSidebar></DashboardSidebar></div>
            <div className='flex-1 overflow-y-auto '>
                {/* border-purple-900/40 bg-[#13043b] shadow-2xl shadow-purple-950/30 */}
            {/* <nav>vanbar</nav> */}
            <main>
                {children}
            </main>
            </div>
        </div>
    );
};

export default layout;