//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";





function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <BrowserRouter> 
          <Routes>
            <Route path='/' elemenent={<Header/>}/> 
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
