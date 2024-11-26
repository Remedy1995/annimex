import React from 'react';
import { Home } from './Pages/Home';
import { AllProducts } from './Pages/allProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SingleProduct } from './Pages/singleProduct';
import { CategoryBasedProduct } from './Pages/categoryBasedProduct';
import  store from './redux/store';
import {Provider} from 'react-redux';
import { WishList } from './Pages/wishList';
import { ViewCart } from './Pages/ViewCart';
import { CheckOutList } from './Pages/CheckOutList';
import { AllShops } from './Pages/AllShops';
import { ShopCategory } from './Pages/ShopCategory';
import { AuthSignUp } from './Pages/AuthSignUp';
import { AuthLogin } from './Pages/AuthLogin';
import { OrderSuccess } from './Pages/OrderSuccess';

function App() {
  return (
    // <Home homeName={""} />
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home homeName={''} />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/shop-category/:shopId' element={<ShopCategory/>} />
        <Route path='/auth-signup' element={<AuthSignUp/>} />
        <Route path='/auth-login' element={<AuthLogin message={''}/>} />
        <Route path='/all-shops' element={<AllShops />} />
        <Route path='/product/:id'  element={<SingleProduct/>}/>
        <Route path='/product/:id'  element={<SingleProduct/>}/>
        <Route path='/category-based-product/:category' element={<CategoryBasedProduct/>}/>
        <Route path='/wishlist-1' element={<WishList/>}/>
        <Route path='/view-cart' element={<ViewCart/>}/>
        <Route path='/check-out-list' element={<CheckOutList/>}/>
        <Route path='/order-success' element={<OrderSuccess/>}/>
      </Routes>

    </BrowserRouter>
    </Provider>


  );
}

export default App;
