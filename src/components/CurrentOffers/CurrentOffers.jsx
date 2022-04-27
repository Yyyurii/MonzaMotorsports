import { useState } from 'react';
import CurrentOffersTitle from './CurrentOffersTitle';
import Filters from '../Filters';
import Cards from '../Cards';

import CardsItemInfo from '../CardsItemInfo.js';

function CurrentOffers() {

  const [cardInfo, setCardInfo] = useState(CardsItemInfo);
  const [filters, setFilters] = useState({
    year: new Set(cardInfo.map(item => item.year).sort()),
    make: new Set(cardInfo.map(item => item.make).sort()),
    model: new Set(cardInfo.map(item => item.model).sort()),
    trim: new Set(cardInfo.map(item => item.trim).sort())
  })

  return (
    <>
      <CurrentOffersTitle />
      <Filters 
        filters={filters}  />
      <Cards
        CardsItemInfo={cardInfo} />
    </>
  )
}

export default CurrentOffers;