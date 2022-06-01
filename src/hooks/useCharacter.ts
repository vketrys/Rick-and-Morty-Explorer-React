import { useEffect, useState } from 'react';
import axios from 'axios';

import paths from 'components/navigation/paths';
import { Character } from 'types/characterTypes';
import { examples } from 'types/generalTypes';

interface ServerResponse {
  data: Character;
}

const useCharacter = (id: string): Character => {
  const [characters, setCharacters] = useState<Character>(examples.character);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${paths.character}/${id}`)
      .then((response: ServerResponse) => {
        const characters: Character = response.data;
        setCharacters(characters);
      });
  }, []);

  return characters;
};

export default useCharacter;
