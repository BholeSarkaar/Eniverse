import React from 'react';
import { Container,Form,Button, Col,Row } from 'react-bootstrap';
import Input from './Input';
export default function Signup() {
    return (
        <div>
             <Container>
                <Row className="mt-5">
                    <Col md={{span:6,offset:3}}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Input 
                                    label="First Name:"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </Col>
                            <Col>
                                <Input 
                                    label="Last Name:"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </Col>
                        </Row>
                        <Input 
                             label="Email Address"
                             type="email"
                             placeholder="Enter your Email"
                             message="We'll never share your email with anyone else."
                        />
                        <Input 
                            label="Enter Password"
                            type="password"
                            placeholder="Enter Password"
                        />
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
