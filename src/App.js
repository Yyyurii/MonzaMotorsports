import './App.scss';

import Questions from './components/Questions';
import Header from './components/Header';
import CurrentOffers from './components/CurrentOffers';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">

      <Header />
      <CurrentOffers />
      <Subscription />
      <Questions />
      <Footer />


    </div>
  );
}

export default App;
