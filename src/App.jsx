import { Route, Routes } from 'react-router-dom';
import MobileMenuProvider from './contexts/MobileMenuContext';
import './App.css';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Checkout from './routes/Checkout';
import ProductDetails from './components/product-details/ProductDetails';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from './features/categories/categoriesSlice';
// import { addCollectionAndDocuments } from './utils/firebase.utils';
// import SHOP_DATA from './data';

function App() {
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <MobileMenuProvider>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='headphones' element={<Shop categoryName='headphones' />} />
          <Route path='speakers' element={<Shop categoryName='speakers' />} />
          <Route path='earphones' element={<Shop categoryName='earphones' />} />
          <Route path='products/:productSlug' element={<ProductDetails />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </MobileMenuProvider>
  );
}

export default App;
