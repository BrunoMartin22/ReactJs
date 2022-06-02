import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js';
import Home from './pages/home'
import Detalle from './pages/Detalle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/Lugar/:id' element={<Detalle />} />
          <Route exact path='*' element={<h1>404 - Pagina no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
