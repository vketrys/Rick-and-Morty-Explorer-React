import { useEffect, useState } from 'react';

import paths from 'components/navigation/paths';
import axios from 'config/axios';
import { Character } from 'types/characterTypes';

interface ServerResponseArray {
  data: Character[];
}

interface ServerResponseObject {
  data: Character;
}

const useStarringCharacters = (ids: string[]): Character[] => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    if (ids.length > 1) {
      axios
        .get(`${paths.character}/${ids.join()}`)
        .then((response: ServerResponseArray) => {
          const characters: Character[] = response.data;
          setCharacters(characters);
        });
    } else {
      axios
        .get(`${paths.character}/${ids.join()}`)
        .then((response: ServerResponseObject) => {
          const characters: Character[] = [];
          characters.push(response.data);
          setCharacters(characters);
        });
    }
  }, []);

  return characters;
};

export default useStarringCharacters;
