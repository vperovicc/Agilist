import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import OrderForm from './pages/OrderForm.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/orderForm' element={<OrderForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
