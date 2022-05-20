import useTypeSelector from 'hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import fetchCharacters from 'store/action-creators/characters/fetchCharacters';
import { CharacterProps } from 'types/characterTypes';

const FetchChars = (id: string): CharacterProps[] => {
  const dispatch = useDispatch();

  dispatch(fetchCharacters(Math.ceil(+id / 20)));

  const { data } = useTypeSelector((state) => state.character);

  return data;
};

export default FetchChars;
