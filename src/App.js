import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js';
import Home from './pages/home'
import Detalle from './pages/Detalle';
import Reserva from './pages/Reserva';
import Carta from './pages/Carta';
import DetallePlato from './pages/DetallePlato';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/Lugar/:id' element={<Detalle />} />
              <Route exact path='/Carta' element={<Carta/>} />
              <Route exact path='/Cart' element={<Cart/>} />
              <Route exact path='/Comida/:id' element={<DetallePlato/>} />
              <Route exact path='/Reserva' element={<Reserva/>}/>
              <Route exact path='*' element={<h1>404 - Pagina no encontrada</h1>} />
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
