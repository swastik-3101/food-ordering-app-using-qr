import { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import FoodCard from '../Components/FoodCard';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  
  useEffect(() => {
    // Load menu items from localStorage
    const storedMenuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    setMenuItems(storedMenuItems);
  }, []); // Empty dependency array means this runs once on mount

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Form.Control
        type="search"
        placeholder="Search dishes or categories..."
        className="mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <Row>
        {filteredItems.map(item => (
          <Col md={4} key={item.id}>
            <FoodCard food={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;