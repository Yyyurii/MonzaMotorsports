
import './App.scss';

import logo from './assets/img/logo.svg';
import instagram from './assets/img/instagram.svg';
import facebook from './assets/img/facebook.svg';

import { Button, Row, Col, Container, Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="wrapper">

      <section className="header">
        <header>
          <Container>
            <Row className="pt-1">
              <Col>
                <img className="logo-img" src={logo} alt="logo" />
              </Col>
              <Col>
                <Nav
                  activeKey="/home"
                  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                  className="justify-content-end"
                >
                  <Nav.Item>
                    <Nav.Link className="link-light" href="/home" eventKey="Inventory">Inventory</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="link-light" eventKey="Financing">Financing</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="link-light" eventKey="Contacts">Contacts</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="link-light" eventKey="instagram"><img src={instagram} alt="instagram" /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="link-light" eventKey="facebook"><img src={facebook} alt="facebook" /></Nav.Link>
                  </Nav.Item>
                </Nav>
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
              <Col className="col-3 ">
                <p className="text-light">Monza Motorsports is a boutique-style dealership specializing in premium imports. We offer an advanced online vehicle purchasing experience   with integrated financing and contactless home delivery.</p>
              </Col>
              <Col className="col-3 ">
                <p className="text-light">All of our cars come with a 5 day/500 kilometres no-hassle exchange option. Since 2012 Monza Motorsports
                  has been the benchmark for innovation in the automotive industry.</p>
              </Col>
            </Row>
            <Row>
                <Button className="btn btn-outline-light btn-lg btn-headerInfo col-3">
                  Browse cars
                </Button>
            </Row>
          </Container>
        </section>
      </section>

    </div>
  );
}

export default App;
