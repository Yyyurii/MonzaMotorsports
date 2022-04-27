import { Container } from 'react-bootstrap';

import './cards.scss';

import CardsItem from '../CardsItem/CardsItem';

function Cards(props) {

  return (
    <Container className="cards">

      <CardsItem
        CardsItemInfo={props.CardsItemInfo} />

    </Container>
  )
}

export default Cards;