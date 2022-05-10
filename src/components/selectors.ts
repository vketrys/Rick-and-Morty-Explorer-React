import useTypeSelector from 'hooks/useTypeSelector';
import { CharacterState } from 'types/characterTypes';

const CharacterSelectors = (): CharacterState => {
  const { characters, error, isLoading } = useTypeSelector(
    (state) => state.character
  );
  return { characters, error, isLoading };
};

export default CharacterSelectors;
