import { useEffect, useState } from 'react';

import paths from 'components/navigation/paths';
import axios from 'config/axios';
import { CharacterProps } from 'types/characterTypes';

interface ServerResponseArray {
  data: CharacterProps[];
}

interface ServerResponseObject {
  data: CharacterProps;
}

const useStarringCharacters = (ids: string[]): CharacterProps[] => {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  useEffect(() => {
    if (ids.length > 1) {
      axios
        .get(`${paths.character}/${ids.join()}`)
        .then((response: ServerResponseArray) => {
          const characters: CharacterProps[] = response.data;
          setCharacters(characters);
        });
    } else {
      axios
        .get(`${paths.character}/${ids.join()}`)
        .then((response: ServerResponseObject) => {
          const characters: CharacterProps[] = [];
          characters.push(response.data);
          setCharacters(characters);
        });
    }
  }, []);

  return characters;
};

export default useStarringCharacters;
