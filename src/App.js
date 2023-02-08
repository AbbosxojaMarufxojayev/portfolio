import './App.css';
import { Routes, Route } from "react-router-dom"
import SubHeader from "./components/sub-header/SubHeader"
import Navbar from "./components/navbar/Navbar"
import Home from "./router/home/Home"
import Cart from "./router/cart/Cart"
import Like from "./router/like/Like"
import Compare from './router/compare/Compare';
import Footer from './components/footer/Footer';
import SingleRoute from './components/single-route/SingleRoute';

function App() {
  return (
    <div className="App">
      <SubHeader/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/compare' element={<Compare/>}/>
        <Route path='/like' element={<Like/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/:id' element={<SingleRoute/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
