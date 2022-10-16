import { Fragment } from 'react';
import FeaturedIn from './components/FeaturedIn/FeaturedIn';
import Hero from './components/Hero/Hero';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
