import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface PokemonFormProps {
  onAdd: (name: string) => void;
}

export const PokemonForm = ({ onAdd }: PokemonFormProps) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Nome ou ID do Pokémon"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 bg-white text-black font-semibold"
        />
        <Button className='bg-green-500' variant="addButton" type="submit">Adicionar</Button>
      </div>
    </form>
  );
};