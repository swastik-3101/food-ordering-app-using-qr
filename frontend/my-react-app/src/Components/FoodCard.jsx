import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';

const FoodCard = ({ food }) => {
  const { dispatch, cart } = useCart();
  const [quantity, setQuantity] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    dispatch({ type: 'ADD_ITEM', payload: { ...food, quantity: quantity + 1 } });
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    dispatch({ type: 'UPDATE_ITEM', payload: { ...food, quantity: quantity + 1 } });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch({ type: 'UPDATE_ITEM', payload: { ...food, quantity: quantity - 1 } });
    } else {
      setQuantity(0);
      dispatch({ type: 'REMOVE_ITEM', payload: food });
    }
  };

  // Effect to show popup when cart items change
  useEffect(() => {
    if (cart.length > 0) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [cart]);

  return (
    <>
      <Card className="mb-3">
        <Card.Img variant="top" src={food.image} />
        <Card.Body>
          <Card.Title>{food.name}</Card.Title>
          <Card.Text>₹{food.price}</Card.Text>
          {quantity === 0 ? (
            <Button
              variant="danger"
              onClick={handleAdd}
              className="w-100"
            >
              ADD <span className="ms-1">+</span>
            </Button>
          ) : (
            <div className="d-flex align-items-center justify-content-between w-100">
              <Button variant="danger" onClick={handleDecrement}>-</Button>
              <span className="mx-2">{quantity}</span>
              <Button variant="danger" onClick={handleIncrement}>+</Button>
            </div>
          )}
          <div className="text-muted mt-2">customisable</div>
        </Card.Body>
      </Card>

      {/* Slide-Up Popup */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#fff',
            boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            zIndex: 1050,
            borderTop: '1px solid #ddd',
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{cart.length}</strong> item(s) in cart
            </div>
            <Button
              variant="success"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              View Cart
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodCard;