import { useState, useEffect } from 'react';
import { Container, Table, Badge, Button } from 'react-bootstrap';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <Container className="mt-4">
      <h2>Order Management</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Table</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>Table {order.tableId}</td>
              <td>{order.items.map(item => `${item.name} x${item.quantity}`).join(', ')}</td>
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
                  Mark Complete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default OrderManagement;