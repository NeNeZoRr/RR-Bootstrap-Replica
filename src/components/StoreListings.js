import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function StoreListings() {
    return (
        <div>
            <h2>Browse stores in Houston</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
                    <Col xs="6" md="4">
                        <Row>
                            <Col xs="4">
                                <Image src={require('C:/Users/navyd/NCSTATE/React-Redux/RR-Bootstrap-Replica/src/Assets/Aldi-Logo.png').default} roundedCircle />
                            </Col>
                            <Col>
                                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="6" md="4">
                        <Row>
                            <Col xs="4">
                                <Image src={require('C:/Users/navyd/NCSTATE/React-Redux/RR-Bootstrap-Replica/src/Assets/Sprouts-Market-Logo.png').default} roundedCircle />
                            </Col>
                            <Col>
                                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="6" md="4">
                        <Row>
                            <Col xs="4">
                                <Image src={require('C:/Users/navyd/NCSTATE/React-Redux/RR-Bootstrap-Replica/src/Assets/Kroger-Logo.png').default} roundedCircle />
                            </Col>
                            <Col>
                                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                                <p>Delivery</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default StoreListings;
