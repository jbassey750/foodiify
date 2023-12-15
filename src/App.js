import logo from './logo.svg';
// import './App.css';
import Navbar from './navbar';
import Home from './components/home';
import Cart from './components/cart';
import Products from './components/products';
import Messsage from './components/message';
import Profile from './components/profile';

function App() {
  console.log(window.location);

  let Page;

  switch (window.location.pathname) {
    case '/':
      Page = <Home />
      break
    case '/Product':
      Page = <Products />
      break
    case '/messsage':
      Page = <Messsage />
      break
    case '/cart':
      Page = <Cart />
      break
    case '/profile':
      Page = <Profile />
      break
      default:
        break
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        { Page }
      </div>
    </>
  )
}

export default App;