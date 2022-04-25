
import './App.scss';

import logo from './assets/img/logo.svg';
import instagram from './assets/img/instagram.svg';
import facebook from './assets/img/facebook.svg';
import sortBy from './assets/img/sortBy.svg';
import vwTiguan from './assets/img/cars/vw-tiguan.svg';

import { Button, Row, Col, Container, Nav, Navbar, Form, Card, InputGroup, FormControl } from 'react-bootstrap';


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

      <Container>
        <Row>
          <h1 className="title-sections text-center">CURRENT OFFERS</h1>
        </Row>
      </Container>

      <Container className="container-formSelect">
        <Row className="formSelect-row">
          <Col className="form-select-col">
            <Form.Select aria-label="Default select example" className="formSelect" data-size="5">
              <option>Year</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col className="form-select-col">
            <Form.Select aria-label="Default select example" className="formSelect">
              <option>Make</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col className="form-select-col">
            <Form.Select aria-label="Default select example" className="formSelect">
              <option>Model</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col className="form-select-col">
            <Form.Select aria-label="Default select example" className="formSelect">
              <option>Trim</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col className="form-select-col">
            <Form.Select aria-label="Default select example" className="formSelect">
              <option>Mileage</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col className="form-select-col col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <Button className="btn-generalStyles btn-selectForm" variant="danger">40 cars</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Check
              label="Instantly available vehicles"
              className="formCheck" />
          </Col>
          <Col className="sort justify-content-end">
            <div className="sort__label">Sort by<img src={sortBy} alt="sort by" /></div>
            <Form.Select className="sort__formSelect">
              <option>Publication date (ascending)</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>

      <Container className="products">

        <Card className="card">
          <Card.Img variant="top" src={vwTiguan} className="card__img" />
          <Card.Body>
            <Card.Title className="card__title"><span className="card__subtitle">2019</span> Volkswagen Tiguan</Card.Title>
            <Card.Text className="card__params">19,855 km | Automatic | Diesel</Card.Text>
            <Card.Text className="card__price">$34,888</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <div className="card__header">
            <Card.Img variant="top" src={vwTiguan} className="card__img" />
            <div className="card__label_new">New</div>
          </div>
          <Card.Body>
            <Card.Title className="card__title"><span className="card__subtitle">2019</span> Volkswagen Tiguan</Card.Title>
            <Card.Text className="card__params">19,855 km | Automatic | Diesel</Card.Text>
            <Card.Text className="card__price">$34,888</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <div className="card__header">
            <Card.Img variant="top" src={vwTiguan} className="card__img" />
            <div className="card__label_sold">SOLD</div>
          </div>
          <Card.Body>
            <Card.Title className="card__title"><span className="card__subtitle">2019</span> Volkswagen Tiguan</Card.Title>
            <Card.Text className="card__params">19,855 km | Automatic | Diesel</Card.Text>
            <Card.Text className="card__price">$34,888</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <div className="card__header">
            <Card.Img variant="top" src={vwTiguan} className="card__img" />
            <div className="card__label_sold">SOLD</div>
          </div>
          <Card.Body>
            <Card.Title className="card__title"><span className="card__subtitle">2019</span> Volkswagen Tiguan</Card.Title>
            <Card.Text className="card__params">19,855 km | Automatic | Diesel</Card.Text>
            <Card.Text className="card__price">$34,888</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <div className="card__header">
            <Card.Img variant="top" src={vwTiguan} className="card__img" />
            <div className="card__label_sold">SOLD</div>
          </div>
          <Card.Body>
            <Card.Title className="card__title"><span className="card__subtitle">2019</span> Volkswagen Tiguan</Card.Title>
            <Card.Text className="card__params">19,855 km | Automatic | Diesel</Card.Text>
            <Card.Text className="card__price">$34,888</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <div className="card__header">
            <Card.Img variant="top" src={vwTiguan} className="card__img" />
            <div className="card__label_sold">SOLD</div>
          </div>
          <Card.Body>
            <Card.Title className="card__title"><span className="card__subtitle">2019</span> Volkswagen Tiguan</Card.Title>
            <Card.Text className="card__params">19,855 km | Automatic | Diesel</Card.Text>
            <Card.Text className="card__price">$34,888</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <div className="card__header">
            <Card.Img variant="top" src={vwTiguan} className="card__img" />
            <div className="card__label_sold">SOLD</div>
          </div>
          <Card.Body>
            <Card.Title className="card__title"><span className="card__subtitle">2019</span> Volkswagen Tiguan</Card.Title>
            <Card.Text className="card__params">19,855 km | Automatic | Diesel</Card.Text>
            <Card.Text className="card__price">$34,888</Card.Text>
          </Card.Body>
        </Card>

      </Container>

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

      <Container>
        <Row>
          <h1 className="title-sections text-center">POPULAR QUESTIONS</h1>
        </Row>
      </Container>

    </div>
  );
}

export default App;
