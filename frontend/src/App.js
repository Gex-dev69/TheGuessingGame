//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import ChatHistory from './components/Chat_history/ChatHistory';
import Header from './components/Header/Header';
import Mainpage from './indexs/Mainpage';
//import Charholder from './components/charHolder';
  
function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <BrowserRouter> 
          <Routes>
            <Route path='charSel/' element={<ChatHistory/>}/>
            <Route path='/' element={<Header/>}/> 
            <Route path='/game' element={<Mainpage/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
