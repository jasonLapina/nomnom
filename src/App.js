import { Fragment } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Layout/Header';
function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
    </Fragment>
  );
}

export default App;
