import logo from './logo.svg';
// import './App.css';
import Navbar from './navbar';
import Home from './components/home';
import Cart from './components/cart';
import Products from './components/products';
import Messsage from './components/message';
import Profile from './components/profile';
import { Route, Routes } from "react-router-dom"

function App() {
  // console.log(window.location);

  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/product' element={ <Products /> } />
          <Route path='/message' element={ <Messsage /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/profile' element={ <Profile /> } />
        </Routes>
      </div>
    </>
  )
}

export default App;