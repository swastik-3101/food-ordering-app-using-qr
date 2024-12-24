import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add phone authentication logic here
  };

  return (
    <Container className="mt-4">
      <div className="col-md-6 mx-auto">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
            />
          </Form.Group>
          <Button type="submit">
            Get OTP
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;