import './App.css';

//components 
import Home from './pages/Home'
import CategoryMovie from './pages/CategoryMovie';

import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import { routePath } from './constants/route';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = {routePath.home} element={<Home />} />
        <Route path = {routePath.categories} element={<CategoryMovie />} />
        <Route path = {routePath.invalid} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
