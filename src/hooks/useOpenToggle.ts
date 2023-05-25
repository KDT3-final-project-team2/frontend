import { useState } from 'react';

const useOpenToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleOpen, setIsOpen };
};

export default useOpenToggle;
