import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import aldiLogo from '../Assets/Aldi-Logo.png';
import sproutsLogo from '../Assets/Sprouts-Market-Logo.png';
import krogerLogo from '../Assets/Kroger-Logo.png';

function StoreListings() {
    return (
        <div>
            <h2>Browse stores in Fayetteville</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
                    <Col xs="6" md="4">
                        <Row>
                            <Col xs="4">
                                <Image src={aldiLogo} roundedCircle alt="ALDI" />
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
                                <Image src={sproutsLogo} roundedCircle alt="Sprouts Farmers Market" />
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
                                <Image src={krogerLogo} roundedCircle alt="Kroger" />
                            </Col>
                            <Col>
                                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                                <p>Delivery</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
                    <Col xs="6" md="4">
                        <Row>
                            <Col xs="4">
                                <Image src={aldiLogo} roundedCircle alt="ALDI" />
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
                                <Image src={sproutsLogo} roundedCircle alt="Sprouts Farmers Market" />
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
                                <Image src={krogerLogo} roundedCircle alt="Kroger" />
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
