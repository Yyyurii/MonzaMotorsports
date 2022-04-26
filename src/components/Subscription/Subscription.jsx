import { Button, Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap';

import './subscription.scss';

function Subscription() {
  return (
    <section className="subscription">
        <Container>
          <Row className="align-items-center">
            <Col className="subscription__text">
              <h4>Haven't found a suitable vehicle?</h4><br />
              <p>Sign up for our newsletter and be the first to know when we publish new vehicle offers.</p>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Enter your email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className="subscription__input"
                />
                <Button variant="outline-secondary" id="button-addon2" className="subscription__btn">
                  Subscribe now
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </section>
  )
}

export default Subscription;