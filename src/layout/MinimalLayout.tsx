import React from 'react';
import { Outlet } from 'react-router';
import { ThemeToggleButton } from '@/components/common/ThemeToggleButton';

const MinimalLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen">
        <header className="sticky top-0 flex w-full z-99999  dark:bg-gray-900">
          <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
            <div className="items-center flex justify-end w-full gap-4 px-5 py-4 lg:flex lg:justify-end lg:px-0">
              <div className="flex items-center gap-2 2xsm:gap-3">
                {/* <!-- Dark Mode Toggler --> */}
                <ThemeToggleButton />
              </div>
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default MinimalLayout;
