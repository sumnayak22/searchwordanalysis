import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import SingleCocktail from './Pages/SingleCocktail';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='cocktail/:id' element={<SingleCocktail />} />
      <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

