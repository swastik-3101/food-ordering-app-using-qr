import { useState, useEffect } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    // Add order submission logic here
    dispatch({ type: 'CLEAR_CART' });
    navigate('/');
  };

  // Show popup when items are added to the cart
  useEffect(() => {
    if (cart.length > 0) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [cart]);

  return (
    <>
      <Container className="mt-4">
        <h2>Your Cart</h2>
        <ListGroup className="mb-4">
          {cart.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between"
            >
              <div>
                {item.name} x {item.quantity}
              </div>
              <div>
                ₹{item.price * item.quantity}
                <Button
                  variant="danger"
                  size="sm"
                  className="ms-3"
                  onClick={() =>
                    dispatch({ type: 'REMOVE_ITEM', payload: item.id })
                  }
                >
                  Remove
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Total: ₹{total}</h4>
          <Button onClick={handlePlaceOrder} disabled={cart.length === 0}>
            Place Order
          </Button>
        </div>
      </Container>

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
              <strong>{cart.length}</strong> item(s) in cart - ₹{total}
            </div>
            <Button
              variant="success"
              size="sm"
              onClick={() => navigate('/cart')}
            >
              View Cart
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;