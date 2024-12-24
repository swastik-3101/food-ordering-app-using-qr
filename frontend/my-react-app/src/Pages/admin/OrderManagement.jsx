import { useState, useEffect } from 'react';
import { Table, Badge, Button } from 'react-bootstrap';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  // Simulated orders data - replace with actual API calls
  useEffect(() => {
    setOrders([
      {
        id: 1,
        customer: "John Doe",
        items: ["Butter Chicken", "Naan"],
        status: "pending",
        total: 450,
        timestamp: "2024-12-23T10:30:00"
      }
    ]);
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="container mt-4">
      <h2>Order Management</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.items.join(", ")}</td>
              <td>₹{order.total}</td>
              <td>
                <Badge bg={
                  order.status === 'completed' ? 'success' :
                  order.status === 'pending' ? 'warning' : 'danger'
                }>
                  {order.status}
                </Badge>
              </td>
              <td>
                <Button 
                  variant="success" 
                  size="sm"
                  onClick={() => updateOrderStatus(order.id, 'completed')}
                >
                  Mark Completed
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderManagement;
