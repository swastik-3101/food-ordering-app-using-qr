import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

// Cart reducer to handle cart state changes
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case 'REMOVE_ITEM': {
      const itemToRemove = state.find(item => item.id === action.payload);
      if (itemToRemove?.quantity > 1) {
        // Decrement quantity if more than 1
        return state.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      // Remove the item if quantity is 1
      return state.filter(item => item.id !== action.payload);
    }

    case 'UPDATE_QUANTITY': {
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    }

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};

// CartProvider to wrap the application and provide cart state
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the CartContext
export const useCart = () => useContext(CartContext);