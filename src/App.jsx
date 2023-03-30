import { Route, Routes } from 'react-router-dom';
import MobileMenuProvider from './contexts/MobileMenuContext';
import './App.css';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Headphones from './routes/categories/Headphones';
import Speakers from './routes/categories/Speakers';
import Earphones from './routes/categories/Earphones';
import Checkout from './routes/Checkout';

function App() {
  return (
    <MobileMenuProvider>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='headphones' element={<Headphones />} />
          <Route path='speakers' element={<Speakers />} />
          <Route path='earphones' element={<Earphones />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </MobileMenuProvider>
  );
}

export default App;
