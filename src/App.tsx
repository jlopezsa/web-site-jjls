import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './pages/About';

function App() {
  return (

    <BrowserRouter>
      <header>
        <About />
      </header>
    </BrowserRouter>
  );
}

export default App;
