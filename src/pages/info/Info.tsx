import React from 'react';

import { useParams } from 'react-router-dom';

import { useItem } from 'components/selectors';

import { ListTypes } from 'types/generalTypes';
import { Episode } from 'types/episodeTypes';
import { Location } from 'types/locationTypes';
import { Character } from 'types/characterTypes';

import CharacterInfo from './CharacterInfo';
import LocationInfo from './LocationInfo';
import EpisodeInfo from './EpisodeInfo';

type InfoParams = {
  characterId: string;
  locationId: string;
  episodeId: string;
};

interface InfoProps {
  type: ListTypes;
}

export default function Info({ type }: InfoProps): JSX.Element {
  const { characterId, locationId, episodeId } = useParams<InfoParams>();
  // let idNum: string;

  // switch (type) {
  //   case ListTypes.character:
  //     idNum = characterId ?? '1';
  //     break;
  //   case ListTypes.location:
  //     idNum = locationId ?? '1';
  //     break;
  //   case ListTypes.episode:
  //     idNum = episodeId ?? '1';
  //     break;
  //   default:
  //     idNum = characterId ?? '1';
  //     break;
  // }

  const idNum = characterId ?? locationId ?? episodeId ?? '1';

  const item = useItem[type](idNum);

  switch (type) {
    case ListTypes.character:
      return <CharacterInfo item={item as Character} />;
    case ListTypes.location:
      return <LocationInfo item={item as Location} />;
    case ListTypes.episode:
      return <EpisodeInfo item={item as Episode} />;
    default:
      return <CharacterInfo item={item as Character} />;
  }
}
