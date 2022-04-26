import { Card } from 'react-bootstrap';

import './cardsItem.scss';

import vwTiguan from '../../assets/img/cars/vw-tiguan.svg';

function CardsItem() {
  return (
    <>
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
    </>
  )
}

export default CardsItem;