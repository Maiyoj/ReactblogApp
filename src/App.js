
import './App.css';
import Home from './components/Home';
import { blog } from './components/data/blog';
import Search from './components/Search';

function App() {

  return (
    <div className="App">
      <Search />
     <Home blogs={blog}/>
  
    </div>
  );
}

export default App;
