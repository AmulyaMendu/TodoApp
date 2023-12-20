import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navigation from './components/Navigation';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
     {/* <SignIn style={{border:"1px solid pink" }}/>
     <SignUp style={{border:"1px solid pink" }}/> */}
     <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Navigation/>}/> */}
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home/:people/:token' element={<Home/>} />

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
