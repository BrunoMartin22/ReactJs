import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import CardList from './components/CardList/CardList.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CardList title={'Nuestros Espacios'}/>
      
    </div>
  );
}

export default App;
