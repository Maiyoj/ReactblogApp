import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { blog } from './components/data/blog';

function App() {

  return (
    <div className="App">
     <Form  blog={blog}/>
  
    </div>
  );
}

export default App;
