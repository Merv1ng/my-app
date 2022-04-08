import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/Basket/Basket';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Product from './components/Product/Product';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Info />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/basket" element={<Basket />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>);
}

export default App;


{/* <Basket />
<Product /> */}