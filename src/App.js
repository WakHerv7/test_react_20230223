
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPokemons from "./pages/AllPokemons";
import OnePokemon from "./pages/OnePokemon";

function App() {
  return (
    <Router>
        <Routes>

          <Route path="/" element={<AllPokemons/>}/>
          <Route path="/pokemon/:id" element={<OnePokemon/>}/>

        </Routes>
      </Router>
  );
}

export default App;
