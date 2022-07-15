import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { blog } from './components/data/blog';

function App() {

  return (
    <div className="App">
     <Home blog={blog}/>
  
    </div>
  );
}

export default App;
