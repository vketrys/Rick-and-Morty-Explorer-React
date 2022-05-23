import { selectors } from "components/selectors"
import useTypeSelector from "hooks/useTypeSelector"
import { ListTypes } from "types/generalTypes"
import CharacterCard from "./character/CharacterCard"
import EpisodeCard from "./episode/EpisodeCard"
import LocationCard from "./location/LocationCard"

interface CardsProps {
  type: ListTypes;
}

interface Cards {
  character: JSX.Element;
  location: JSX.Element;
  episode: JSX.Element;
}

export const cardsSelector = ({ type }: CardsProps): Cards => {
  const { data } = useTypeSelector(selectors[type]);

  const charCard = (<CharacterCard key={item.id} character={item as Character});

  const cards = {
    [ListTypes.character]: <CharacterCard key={item.id} character={item as Character} />
    ,
    [ListTypes.location]: (
      <LocationCard key={item.id} location={item as Location} />
    ),
    [ListTypes.episode]: (
      <EpisodeCard key={item.id} episode={item as Episode} />
    ),
  };

  return cards
};