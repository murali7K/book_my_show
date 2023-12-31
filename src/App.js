import "./App.css";
import axios from "axios";
// Routing
import { Routes, Route } from "react-router-dom";
// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "36bc00cd13f03ab2544c642f13a0c0ae";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/movie/:id" element={<MoviePage />} />
    //   <Route path="/plays" element={<PlayPage />} />
    // </Routes>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
