
// import UseRef from './component/UseRef'
import './App.css';
import Navbar from './component/Navbar';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,Routes ,Switch ,Route
} from 'react-router-dom'
import  Home  from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp'





function App() {
  return (
    <div className="App">
     {/* <UseRef/> */}
     <Router>
      
     <Navbar/>
     <Home/>
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/services ' element={<Services />} />
          <Route path='/products ' element={<Products/>} />
          <Route path='/sign-up ' element={<SignUp/>} />
          
        </Routes>
     </Router>
    </div>
  );
}

export default App;
