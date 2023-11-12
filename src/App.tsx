import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Movies } from './features/movies/Movies'
import { MovieDetail } from "./features/movies/MovieDetail";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={  <Movies />}/>
        <Route path="/movie-details/:movieId" element={<MovieDetail />}/>
     </Routes>
  </BrowserRouter>
  )
}

export default App

