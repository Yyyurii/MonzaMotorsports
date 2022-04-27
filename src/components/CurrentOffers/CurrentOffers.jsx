import { useState, useEffect } from 'react';

import CurrentOffersTitle from './CurrentOffersTitle';
import Filters from '../Filters';
import Cards from '../Cards';
import CardsItemInfo from '../CardsItemInfo.js';

function CurrentOffers() {

  const [cardInfo, setCardInfo] = useState(CardsItemInfo);
  const [year, setYear] = useState('year');

  const filterForRender = {
    year: new Set(CardsItemInfo.map(item => item.year).sort()),
    make: new Set(CardsItemInfo.map(item => item.make).sort()),
    model: new Set(CardsItemInfo.map(item => item.model).sort()),
    trim: new Set(CardsItemInfo.map(item => item.trim).sort())
  };

  const handleYear = (year) => {
    setYear(year);
  }

  useEffect(() => {
    handleYear(year);
    onCardChange();
  }, [year])

  const onCardChange = () => {
    let filterCards = [];

    CardsItemInfo.map(item => {

      if (item.year === year) {
        filterCards.push(item)
      } 
      if (year === 'Year') {
        filterCards = CardsItemInfo
      } 
    })
console.log(filterCards);
    setCardInfo(filterCards);
  }

  return (
    <>
      <CurrentOffersTitle />
      <Filters 
        filters={filterForRender}
        handleYear={handleYear}  />
      <Cards
        cardsItemInfo={cardInfo} />
    </>
  )
}

export default CurrentOffers;