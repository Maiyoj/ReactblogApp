
import './App.css';
import Home from './components/Home';
import { blog } from './components/data/blog';

function App() {

  return (
    <div className="App">
     <Home blogs={blog}/>
  
    </div>
  );
}

export default App;
