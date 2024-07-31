// components/DropdownMenu/DropdownMenu.tsx

import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { DropdownMenuProps } from '../../types';



const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={className} ref={dropdownRef}>
      <div onClick={handleToggle}>
        {trigger}
      </div>
      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
