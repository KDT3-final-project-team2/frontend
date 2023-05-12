import { useState } from 'react';

const useOpenToggle = (): [boolean, () => void] => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return [open, toggleOpen];
};

export default useOpenToggle;
