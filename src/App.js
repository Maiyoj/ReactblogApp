
import './App.css';
import Home from './components/Home';
import { blog } from './components/data/blog';
import Search from './components/Search';
import{useState} from "react";

function App() {
  const [searchData, setSearch] = useState()

  return (
    <div className="App">
      <Search searchData={searchData} setSearch={setSearch} blog={blog}/>
     <Home blogs={blog}/>
  
    </div>
  );
}

export default App;
