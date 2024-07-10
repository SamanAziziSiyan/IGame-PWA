// components/DropdownMenu/DropdownMenu.tsx

import React, { useState, ReactNode } from 'react';

interface DropdownMenuProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={`${className}`}>
      <div className={''} onClick={handleToggle}>
        {trigger}
      </div>
      {isOpen && (
        <div className={''}>
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
