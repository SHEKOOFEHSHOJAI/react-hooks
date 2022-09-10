
// import UseRef from './component/UseRef'
import './App.css';
import Navbar from './component/Navbar';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,Routes ,Switch ,Route
} from 'react-router-dom'
import  Home  from './pages/Home';





function App() {
  return (
    <div className="App">
     {/* <UseRef/> */}
     <Router>
      
     <Navbar/>
     <Home/>
        <Routes >
          <Route  path='/ 'element={<Home/>} />
          
        </Routes>
     </Router>
    </div>
  );
}

export default App;
