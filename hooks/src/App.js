
// import UseRef from './component/UseRef'
import './App.css';
import Navbar from './component/Navbar';

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
          <Route exact path='/ 'element={Home} />
          
        </Routes>
     </Router>
    </div>
  );
}

export default App;
