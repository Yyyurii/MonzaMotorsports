import {  Row, Col, Container, Nav } from 'react-bootstrap';

import './footer.scss';

import logo from '../../assets/img/logo.svg';
import instagram from '../../assets/img/instagram.svg';
import facebook from '../../assets/img/facebook.svg';

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="pt-1 footer">

          <Col>
            <img className="logo-img" src={logo} alt="logo" />
          </Col>

          <Col className="justify-content-center">
            <Nav>
              <Nav.Link className="navLink" href="/home" eventKey="Inventory">Inventory</Nav.Link>
              <Nav.Link className="navLink" eventKey="Financing">Financing</Nav.Link>
              <Nav.Link className="navLink" eventKey="Contacts">Contacts</Nav.Link>
            </Nav>
          </Col>

          <Col>
            <Nav className="justify-content-end">
              <Nav.Link className="navLink" eventKey="instagram"><img src={instagram} alt="instagram" /></Nav.Link>
              <Nav.Link className="navLink" eventKey="facebook"><img src={facebook} alt="facebook" /></Nav.Link>
            </Nav>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer;