import { useState } from 'react';
import { Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import { useMenu } from '../../contexts/MenuContext';

const MenuManagement = () => {
  const { menuItems, addMenuItem, removeMenuItem } = useMenu();
  const [showSuccess, setShowSuccess] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    description: '',
    category: 'North Indian',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMenuItem(newItem);
    setNewItem({
      name: '',
      price: '',
      description: '',
      category: 'North Indian',
      image: ''
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <Container className="mt-4">
      <h2>Menu Management</h2>
      
      {showSuccess && (
        <Alert variant="success">Item added successfully!</Alert>
      )}
      
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
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={newItem.category}
            onChange={(e) => setNewItem({...newItem, category: e.target.value})}
          >
            <option value="North Indian">North Indian</option>
            <option value="South Indian">South Indian</option>
            <option value="Thalis">Thalis</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={newItem.description}
            onChange={(e) => setNewItem({...newItem, description: e.target.value})}
          />
        </Form.Group>
        
        <Button type="submit">Add Item</Button>
      </Form>

      <Row>
        {menuItems.map(item => (
          <Col md={4} key={item.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Price: ₹{item.price}<br/>
                  Category: {item.category}<br/>
                  {item.description}
                </Card.Text>
                <Button 
                  variant="danger"
                  onClick={() => removeMenuItem(item.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MenuManagement;
