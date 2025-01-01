import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState({
    activeOrders: 0,
    todayRevenue: 0,
    popularItems: [],
    recentOrders: []
  });

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Active Orders</Card.Title>
              <h2>{stats.activeOrders}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Today's Revenue</Card.Title>
              <h2>₹{stats.todayRevenue}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Orders</Card.Title>
              <h2>{stats.recentOrders.length}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;