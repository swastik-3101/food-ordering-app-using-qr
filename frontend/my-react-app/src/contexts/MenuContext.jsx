import { createContext, useContext, useState, useEffect } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(() => {
    const savedItems = localStorage.getItem('menuItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
  }, [menuItems]);

  const addMenuItem = (item) => {
    setMenuItems([...menuItems, { ...item, id: Date.now() }]);
  };

  const removeMenuItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const updateMenuItem = (id, updatedItem) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, ...updatedItem } : item
    ));
  };

  return (
    <MenuContext.Provider value={{ 
      menuItems, 
      addMenuItem, 
      removeMenuItem, 
      updateMenuItem 
    }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);