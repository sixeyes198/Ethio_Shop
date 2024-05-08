import "./App.css";
import Hero from "./components/Herosection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/ContactUs/Contact";
import ProductDetail from "./components/Products/ProductDetail";
import img1 from "./components/assets/img1.jpg";
import img2 from "./components/assets/img2.jpg";
import img3 from "./components/assets/img3.jpg";
import img4 from "./components/assets/img4.jpg";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

const ProductsData = [
  {
    id: 1,
    img: img1,
    name: "white Teff",
    price: "300 ILS",
    description: "Freshly grinded white teff",
  },
  {
    id: 2,
    img: img2,
    name: "Red Teff",
    price: "300 ILS",
    description: "Freshly grinded red teff",
  },
  {
    id: 3,
    img: img3,
    name: "Ethiopian coffee",
    price: "50 ILS 1 Kilo",
    description: "Coffee imported from ethiopia",
  },
  {
    id: 4,
    img: img4,
    name: "Amarula liqueur",
    price: "155 ILS",
    description: "AMARULA ETHIOPIAN COFFEE LIQUEUR",
  },
];

export const AppContext = createContext();

function App() {
  const [myCart, setMyCart] = useState([]);

  return (
    <>
      <AppContext.Provider value={{ myCart, setMyCart }}>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Products ProductsData={ProductsData} />} />
          <Route
            path="/product/:id"
            element={<ProductDetail ProductsData={ProductsData} />}
          />
          <Route path="/cart/:name/:price" element={<Cart />} />
        </Routes>
        <About />
        <Contact />
      </AppContext.Provider>
    </>
  );
}

export default App;
