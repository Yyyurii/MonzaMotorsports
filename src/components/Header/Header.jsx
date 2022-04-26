import { Button, Row, Col, Container, Nav, Navbar } from 'react-bootstrap';

import './header.scss';

import logo from '../../assets/img/logo.svg';
import instagram from '../../assets/img/instagram.svg';
import facebook from '../../assets/img/facebook.svg';

function Header() {
  return (
    <section className="header">
      <header>
        <Container>
          <Row className="pt-1">
            <Col>
              <img className="logo-img" src={logo} alt="logo" />
            </Col>
            <Col>


              <Navbar expand="lg" variant="light" className="navbar-dark navbar-white">
                <Container className="justify-content-end" variant="navbar-light">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end" />
                  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">
                      <Nav.Link className="navLink" href="/home" eventKey="Inventory">Inventory</Nav.Link>
                      <Nav.Link className="navLink" eventKey="Financing">Financing</Nav.Link>
                      <Nav.Link className="navLink" eventKey="Contacts">Contacts</Nav.Link>
                      <Nav.Link className="navLink" eventKey="instagram"><img src={instagram} alt="instagram" /></Nav.Link>
                      <Nav.Link className="navLink" eventKey="facebook"><img src={facebook} alt="facebook" /></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>



            </Col>
          </Row>
        </Container>
      </header>

      <section className="header-info">
        <Container>
          <Row>
            <Col className="col-12">
              <h1 className="title text-light">The right way to get a car</h1>
            </Col>
          </Row>
          <Row>
            <Col className="col-xl-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p className="text-light">Monza Motorsports is a boutique-style dealership specializing in premium imports. We offer an advanced online vehicle purchasing experience   with integrated financing and contactless home delivery.</p>
            </Col>
            <Col className="col-xl-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p className="text-light">All of our cars come with a 5 day/500 kilometres no-hassle exchange option. Since 2012 Monza Motorsports
                has been the benchmark for innovation in the automotive industry.</p>
            </Col>
          </Row>
          <Row>
            <Button className="btn btn-outline-light btn-lg btn-headerInfo btn-generalStyles col-xs-6 col-sm-8 col-md-8 col-lg-6 col-xl-3">
              Browse cars
            </Button>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default Header;