import React from 'react';
import {Card, Form, Button, Container, Row, Col} from 'react-bootstrap';

const LongCard = (props) => {
    return (
        <Container fluid>
            <Row>
            <Col>
            <Card>
                
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control type="text"/>
                        <Form.Text className="text-muted">
                        (example : -4.4203400)
                        </Form.Text>
                    </Form.Group>

                    {/* <Button variant="primary" type="submit">
                        Next
                    </Button> */}
                </Form>

            </Card>
            </Col>
            </Row>
        </Container>
    );
};

export default LongCard;