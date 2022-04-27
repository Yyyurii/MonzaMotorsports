import { useState } from 'react';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';

import './filters.scss';

import sortBy from '../../assets/img/sortBy.svg';

function Filters(props) {

  let { year, make, model, trim, handleYear } = props;

  year = Array.from(props.filters.year);
  make = Array.from(props.filters.make);
  model = Array.from(props.filters.model);
  trim = Array.from(props.filters.trim);

  return (
    <Container className="container-formSelect">
      <Row className="formSelect-row">
        <Col className="form-select-col">
          <Form.Select 
            aria-label="Default select example" 
            className="formSelect" 
            data-size="5"
            onChange={(e) => handleYear(e.target.value)}>
            <option>Year</option>
            {
              year.map((year, index) => {
                return (
                  <option
                    key={index}
                    value={year} >
                    {year}
                  </option>
                )
              })
            }
          </Form.Select>
        </Col>
        <Col className="form-select-col">
          <Form.Select aria-label="Default select example" className="formSelect">
            <option>Make</option>
            {
              make.map((make, index) => {
                return (
                  <option
                    key={index}
                    value={make}>
                    {make}
                  </option>
                )
              })
            }
          </Form.Select>
        </Col>
        <Col className="form-select-col">
          <Form.Select aria-label="Default select example" className="formSelect">
            <option>Model</option>
            {
              model.map((model, index) => {
                return (
                  <option
                    key={index}
                    value={model}>
                    {model}
                  </option>
                )
              })
            }
          </Form.Select>
        </Col>
        <Col className="form-select-col">
          <Form.Select aria-label="Default select example" className="formSelect">
            <option>Trim</option>
            {
              trim.map((trim, index) => {
                return (
                  <option
                    key={index}
                    value={trim}>
                    {trim}
                  </option>
                )
              })
            }
          </Form.Select>
        </Col>
        <Col className="form-select-col">
          <Form.Select aria-label="Default select example" className="formSelect">
            <option>Mileage</option>
            <option value="1">&gt; 10,000</option>
            <option value="2">&gt; 50,000</option>
            <option value="3">&gt; 100,000</option>
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

  )

}

export default Filters;