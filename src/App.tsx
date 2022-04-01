import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MyPokemon } from './pages/my-pokemon/MyPokemon';
import { PokemonDetail } from './pages/pokemon-detail/PokemonDetail';
import { PokemonList } from './pages/pokemon-list/PokemonList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PokemonList />} index />
          <Route element={<PokemonList />} path="/pokemon-list" />
          <Route element={<PokemonDetail />} path="pokemon/:species" />
          <Route element={<MyPokemon />} path="my-pokemon" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
