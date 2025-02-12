import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

const POKEAPI_URL = process.env.NEXT_PUBLIC_POKEAPI_URL;

const saveToLocalStorage = (pokemonList: Pokemon[]) => {
  localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
};

const loadFromLocalStorage = (): Pokemon[] => {
  if (typeof window === "undefined") return [];
  const savedPokemonList = localStorage.getItem("pokemonList");
  return savedPokemonList ? JSON.parse(savedPokemonList) : [];
};

const fetchInitialPokemon = async (): Promise<Pokemon[]> => {
  const response = await fetch(`${POKEAPI_URL}/pokemon?limit=12`);
  const data = await response.json();
  const pokemonDetails = await Promise.all(
    data.results.map(async (p: { url: string }) => {
      const response = await fetch(p.url);
      return response.json();
    })
  );
  return pokemonDetails;
};

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const loadPokemon = async () => {
      const savedPokemonList = loadFromLocalStorage();

      if (savedPokemonList.length === 0) {
        const initialPokemon = await fetchInitialPokemon();
        setPokemonList(initialPokemon);
        saveToLocalStorage(initialPokemon);
      } else {
        setPokemonList(savedPokemonList);
      }
    };

    loadPokemon();
  }, []);

  useEffect(() => {
    saveToLocalStorage(pokemonList);
  }, [pokemonList]);

  const addPokemonMutation = useMutation({
    mutationFn: async (name: string) => {
      const response = await fetch(`${POKEAPI_URL}/pokemon/${name.toLowerCase()}`);
      if (!response.ok) {
        throw new Error("Pokémon não encontrado");
      }
      return response.json();
    },
    onSuccess: (data) => {
      const newPokemon: Pokemon = {
        id: data.id,
        name: data.name,
        sprites: {
          front_default: data.sprites.front_default,
        },
      };
      setPokemonList((oldList) => {
        const updatedList = [...oldList, newPokemon];
        saveToLocalStorage(updatedList);
        return updatedList;
      });
      toast.success(`${newPokemon.name} adicionado com sucesso!`);
    },
    onError: () => {
      toast.error("Pokémon não encontrado!");
    },
  });

  const editPokemonMutation = useMutation({
    mutationFn: async ({ id, newName }: { id: number; newName: string }) => {
      setPokemonList((oldList) => {
        const updatedList = oldList.map((p) => (p.id === id ? { ...p, name: newName } : p));
        saveToLocalStorage(updatedList);
        return updatedList;
      });
      toast.success("Nome do Pokémon atualizado!");
    },
  });

  const deletePokemonMutation = useMutation({
    mutationFn: async (id: number) => {
      setPokemonList((oldList) => {
        const updatedList = oldList.filter((p) => p.id !== id);
        saveToLocalStorage(updatedList);
        return updatedList;
      });
      toast.success("Pokémon excluído com sucesso!");
    },
  });

  return {
    pokemonList,
    addPokemon: addPokemonMutation.mutate,
    editPokemon: editPokemonMutation.mutate,
    deletePokemon: deletePokemonMutation.mutate,
  };
};