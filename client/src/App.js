import './App.css';
import NavBar from './components/NavBar';
import Section1 from './components/Sections/Section1.jsx';
import Section2 from './components/Sections/Section2.jsx';

function App() {
  return (
    <div>
      <div>
      <NavBar />
      </div>
      <div>
        <Section1 />
      </div>
      <div>
        <Section2 />
      </div>
    </div>
  );
}

export default App;
