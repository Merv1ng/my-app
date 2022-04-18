import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/Basket/Basket';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import ElementScreen from './components/ElementScreen/ElementScreen';
import Product from './components/Product/Product';


function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Info />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/product/*" element={<Product positsions={props.positsions} />} />
          <Route path="/basket/*" element={<Basket baskets={props.baskets} />} />
          <Route path="/elementScreen/*" element={<ElementScreen
            review={props.review}
            dispatch={props.dispatch} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;