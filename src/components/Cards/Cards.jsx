import { Container } from 'react-bootstrap';

import './cards.scss';

import CardsItem from '../CardsItem';

function Cards() {
  return (
    <Container className="cards">

      <CardsItem />

    </Container>
  )
}

export default Cards;