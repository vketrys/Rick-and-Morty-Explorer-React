import useTypeSelector from 'hooks/useTypeSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchCharacters from 'store/action-creators/characters/fetchCharacters';
import { Character } from 'types/characterTypes';

const FetchChars = (id: string): Character[] => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(Math.ceil(+id / 20)));
  }, []);

  const { data } = useTypeSelector((state) => state.character);

  return data;
};

export default FetchChars;
