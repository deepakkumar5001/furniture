import logo from './logo.svg';
import './App.css';
import Log from './Log';
import Home from './Home';
import Signup from './Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/log' element={<Log/>}/>
      <Route path='/home' element={<Home/>}/>

    </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
