import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Background = ({ backgroundImage }) => (
    <div>
        <Card style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6" }} className="text-black">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                    Order groceries for delivery <br /> or pickup today
                </Card.Text>
                <Card.Text style={{ fontSize: "1em" }}>
                    Whatever you want from local stores, brought right to your door.
                </Card.Text>
                <Form style={{ width: "100%", maxWidth: "578px" }}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control size="lg" type="text" placeholder="Enter your address" />
                    </Form.Group>
                </Form>
            </div>
        </Card>
    </div>
);

export default Background;
