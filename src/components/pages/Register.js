import React from 'react'
import Footer from '../subcomponents/Footer';
import CustomNavbar from "../subcomponents/Navbar";
import '../../App.css';
import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
const RegistrationPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match");
          return;
        }
      
        try {
          const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            alert("Registration successful!");
            // Optionally reset form
            setFormData({
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            });
          } else {
            alert(`Registration failed: ${data.message || 'Something went wrong'}`);
          }
        } catch (error) {
          console.error("Error during registration:", error);
          alert("Error connecting to the server.");
        }
      };
      
  
    return (
        <>  <CustomNavbar name="ecommerce" />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row>
          <Col>
            <Card className="card-hotpink-border" style={{ width: '26rem', padding: '20px' }}>
              <Card.Body>
                <Card.Title className="text-center mb-4" style={{ color: 'hotpink' }}>
                  Create Account
                </Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
  
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
  
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
  
                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
  
                  <Button type="submit" className="w-100" style={{ backgroundColor: 'hotpink', borderColor: 'lightpink', color: 'white' }}>
                    Register
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
      </>
    );
  };
  
  export default RegistrationPage;