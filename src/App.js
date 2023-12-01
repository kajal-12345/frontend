import "./App.css";
import Header from "./components/layouts/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/layouts/home/Home";
import Contact from "./components/layouts/contact/Contact";
import About from "./components/layouts/about/About";
import Product from "./components/layouts/product/Product";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
