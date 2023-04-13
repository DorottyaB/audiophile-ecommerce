import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MobileMenuProvider from './contexts/MobileMenuContext';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Checkout from './routes/Checkout';
import ProductDetails from './components/product-details/ProductDetails';
import Error from './components/error/Error';
import { fetchCategories } from './features/categories/categoriesSlice';
import { setIsCartOpen, setIsPopupVisible } from './features/cart/cartSlice';
import { selectIsCartOpen, selectIsPopupVisible } from './selectors/cart/cartSelector';
// import { addCollectionAndDocuments } from './utils/firebase.utils';
// import SHOP_DATA from './data';

function App() {
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);
  const isCartOpen = useSelector(selectIsCartOpen);
  const isPopupVisible = useSelector(selectIsPopupVisible);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  // Automatically scroll to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isCartOpen) {
      dispatch(setIsCartOpen(!isCartOpen));
    }
    if (isPopupVisible && pathname === '/checkout') {
      dispatch(setIsPopupVisible(false));
    }
  }, [pathname]);

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
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </MobileMenuProvider>
  );
}

export default App;
