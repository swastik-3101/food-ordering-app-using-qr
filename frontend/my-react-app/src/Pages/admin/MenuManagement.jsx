import { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    description: '',
    category: 'North Indian',
    image: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Load menu items from localStorage on component mount
    const storedMenuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    setMenuItems(storedMenuItems);
  }, []);

  // Update localStorage whenever menuItems changes
  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
  }, [menuItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const newMenuItem = {
        ...newItem,
        id: Date.now(), // Use timestamp as unique ID
        price: Number(newItem.price) // Convert price to number
      };

      setMenuItems([...menuItems, newMenuItem]);
      setNewItem({
        name: '',
        price: '',
        description: '',
        category: 'North Indian',
        image: ''
      });
      setSuccess('Item added successfully!');
    } catch (err) {
      setError('Failed to add item');
    }
  };

  const handleDelete = (id) => {
    try {
      setMenuItems(menuItems.filter(item => item.id !== id));
      setSuccess('Item deleted successfully!');
    } catch (err) {
      setError('Failed to delete item');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Menu Management</h2>
      
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      
      <Form onSubmit={handleSubmit} className="mb-4">
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                required
                min="0"
              />
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={newItem.category}
            onChange={(e) => setNewItem({...newItem, category: e.target.value})}
            required
          >
            <option value="North Indian">North Indian</option>
            <option value="South Indian">South Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Continental">Continental</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={newItem.description}
            onChange={(e) => setNewItem({...newItem, description: e.target.value})}
            required
          />
        </Form.Group>
        
        <Button type="submit" variant="primary">Add Item</Button>
      </Form>

      <Row>
        {menuItems.map(item => (
          <Col md={4} key={item.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
                <Card.Text>₹{item.price}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <Button 
                  variant="danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MenuManagement;