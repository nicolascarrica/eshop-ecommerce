import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Contact, Login, Register, Reset } from "./pages/"
import { Header, Footer } from "./components"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FilteredProducts from "./pages/Products/FilteredProducts";
import SingleProduct from "./pages/Products/SingleProduct";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/chekout/Checkout";
import OrderHistory from "./pages/orderHostory/OrderHistory";




function App() {
  return (
      <BrowserRouter>
      <ToastContainer />
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/order-history" element={<OrderHistory />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/reset" element={<Reset />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout"element={<Checkout />}/>
          <Route path="/filteredProducts/:type" element={<FilteredProducts />}/>
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />}/>
        </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
