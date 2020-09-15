import React from 'react';
import {Container,Row,Col } from 'react-bootstrap';
import './home.css';
export default function Home() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={2} sm={6} className="h-100">Sidebar</Col>
                    <Col md={10} sm={6} className="cont">Container</Col>
                </Row>
            </Container>
        </div>
    )
}
