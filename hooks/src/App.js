
// import UseRef from './component/UseRef'
import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,Routes ,Switch ,Route
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     {/* <UseRef/> */}
     <Router>
      
     <Navbar/>
        <Routes >
          <Route exact path='/ 'element={<Navbar/>} />

        </Routes>
     </Router>
    </div>
  );
}

export default App;
