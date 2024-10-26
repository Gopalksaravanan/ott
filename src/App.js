import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../src/homePage/index";
import MovieDetails from './movieDetails';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={< MovieDetails />} /> {/* Movie details page */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
