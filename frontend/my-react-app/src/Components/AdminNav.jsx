import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/admin">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/admin/orders">Orders</Nav.Link>
            <Nav.Link as={Link} to="/admin/menu">Menu Management</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNav;