import { useState } from 'react';
import { Input } from './ui/input';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <Input
        className='bg-white text-black font-semibold'
        type="text"
        placeholder="Buscar Pokémon por nome ou ID"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};