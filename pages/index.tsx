import { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonCard } from '../components/PokemonCard';
import { PokemonForm } from '../components/PokemonForm';
import { SearchBar } from '../components/SearchBar';

export default function Home() {
  const { pokemonList, addPokemon, editPokemon, deletePokemon } = usePokemon();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPokemon = pokemonList.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pokemon.id.toString().includes(searchQuery)
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center my-4 mb-8">
        <img
          src="/assets/pokedex-logo.svg"
          alt="Pokédex"
          className="w-60 h-auto"
        />
      </div>

      <SearchBar onSearch={setSearchQuery} />
      <PokemonForm onAdd={addPokemon} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onEdit={editPokemon}
            onDelete={deletePokemon}
          />
        ))}
      </div>
    </div>
  );
}