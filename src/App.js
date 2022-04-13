import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/Basket/Basket';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Product from './components/Product/Product';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Info />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/product/*" element={<Product positsions={props.positsions}/>} />
            <Route path="/basket/*" element={<Basket baskets={props.baskets} />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>);
}

export default App;


{/* <Basket />
<Product /> */}