import { Fragment } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';

import Laside from './Components/Laside/Laside';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Laside />
      <Footer/>
    </Fragment>
  );
}

export default App;
