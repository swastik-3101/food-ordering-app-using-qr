import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    { id: 1, name: 'Thalis', image: '/images/thali.jpg' },
    { id: 2, name: 'North Indian', image: '/images/north-indian.jpg' },
    { id: 3, name: 'South Indian', image: '/images/south-indian.jpg' }
  ];

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Welcome Page</h1>
      <Row>
        {categories.map(category => (
          <Col md={4} key={category.id}>
            <Card as={Link} to="/menu" className="mb-4">
              <Card.Img variant="top" src={category.image} />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;