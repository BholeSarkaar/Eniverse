import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Container>
            <Jumbotron className="jumbo text-center bg-white">
                <h1>Welcome to Admin Dashboard</h1>
            </Jumbotron>
            </Container>
        </div>
    )
}
