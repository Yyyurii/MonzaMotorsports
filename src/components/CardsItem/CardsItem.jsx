import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import './cardsItem.scss';

function CardsItem(props) {

  const [cardInfo, setCardInfo] = useState(props.cardsItemInfo);

  useEffect(() => {
    setCardInfo(props.cardsItemInfo)
  }, [props.cardsItemInfo]);
  return (
    <>
      {
        cardInfo.map(item => {
          const { id, img, year, make, model, trim, mileage, price, label } = item;
          return (
            <Card className="card" key={id}>
              <div className="card__header">
                <Card.Img variant="top" src={img} className="card__img" />
                <div className="card__label_new" style={label === 'new' ? { display: 'block' } : { display: 'none' }}>New</div>
                <div className="card__label_sold" style={label === 'sold' ? { display: 'block' } : { display: 'none' }}>SOLD</div>
              </div>
              <Card.Body>
                <Card.Title className="card__title"><span className="card__subtitle">{year}</span> {make} {model} {trim}</Card.Title>
                <Card.Text className="card__params">{mileage} km | Automatic | Diesel</Card.Text>
                <Card.Text className="card__price">${price}</Card.Text>
              </Card.Body>
            </Card>
          )
        })
      }
    </>
  )
}

export default CardsItem;