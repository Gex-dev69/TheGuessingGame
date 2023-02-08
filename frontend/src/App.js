//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import ChatHistory from './components/Chat_history/ChatHistory';




function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <BrowserRouter> 
          <ChatHistory/>
          <Routes>
            <Route path='/' elemenent={<Header/>}/> 
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
