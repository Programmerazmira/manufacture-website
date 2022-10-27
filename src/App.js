
import './App.css';
import Navber from './Pages/Shared/Navber';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Product from './Product/Product';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Catalog from './Catalog/Catalog';
import Login from './Login/Login';


function App() {
  return (
    <div className="App">
     <Navber></Navber>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
