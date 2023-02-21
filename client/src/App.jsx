import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
 