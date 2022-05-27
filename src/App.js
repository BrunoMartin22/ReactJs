import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js';
import CardList from './components/CardList/CardList.js';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='*' element={<h1>404 - Pagina no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
      <CardList title={'Nuestros Espacios'}/>
      
    </div>
  );
}

export default App;
