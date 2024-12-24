// src/pages/admin/Dashboard.js
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState({
    activeOrders: 5,
    todayRevenue: 15400,
    popularItems: [
      { name: 'Butter Chicken', orders: 25 },
      { name: 'Paneer Tikka', orders: 20 },
      { name: 'Dal Makhani', orders: 18 }
    ],
    recentOrders: [
      { id: 1, tableId: '12', amount: 850, status: 'pending' },
      { id: 2, tableId: '15', amount: 1200, status: 'completed' }
    ],
    salesData: [
      { time: '12 PM', sales: 4500 },
      { time: '1 PM', sales: 3500 },
      { time: '2 PM', sales: 5500 },
      { time: '3 PM', sales: 4800 }
    ]
  });

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Active Orders</Card.Title>
              <h2>{stats.activeOrders}</h2>
              <Link to="/admin/orders">View Orders</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Today's Revenue</Card.Title>
              <h2>₹{stats.todayRevenue.toLocaleString()}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Popular Items</Card.Title>
              <Table>
                <tbody>
                  {stats.popularItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.orders} orders</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Today's Sales</Card.Title>
              <BarChart width={600} height={300} data={stats.salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Recent Orders</Card.Title>
              <Table>
                <thead>
                  <tr>
                    <th>Table</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.tableId}</td>
                      <td>₹{order.amount}</td>
                      <td>{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;