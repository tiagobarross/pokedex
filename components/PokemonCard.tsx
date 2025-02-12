import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';

interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  };
  onEdit: (variables: { id: number; newName: string }) => void;
  onDelete: (id: number) => void;
}

export const PokemonCard = ({ pokemon, onEdit, onDelete }: PokemonCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(pokemon.name);

  const handleEdit = () => {
    onEdit({ id: pokemon.id, newName: editedName });
    setIsEditing(false);
  };

  return (
    <Card className="text-center m-4">
      <CardHeader className="p-0">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mx-auto w-40 h-40"
        />
      </CardHeader>
      <CardContent className="p-0 pb-4">
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="text-xl font-semibold text-center border rounded p-1"
          />
        ) : (
          <h3 className="text-3xl font-pokemon text-yellow-500">{pokemon.name}</h3>
        )}
        <p className="text-gray-500 mt-4">ID: {pokemon.id}</p>
      </CardContent>
      <CardFooter className="flex justify-center gap-4 p-0 pt-4 pb-4">
        {isEditing ? (
          <Button className='bg-blue-500' variant="editButton" onClick={handleEdit}>Salvar</Button>
        ) : (
          <Button className='bg-blue-500' variant="editButton" onClick={() => setIsEditing(true)}>Editar</Button>
        )}
        <Button onClick={() => onDelete(pokemon.id)} variant="destructive">
          Excluir
        </Button>
      </CardFooter>
    </Card>
  );
};
