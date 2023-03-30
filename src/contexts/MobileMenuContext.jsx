import { createContext, useState } from 'react';

export const MobileMenuContext = createContext();

const MobileMenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuProvider;
