import React, { MemoExoticComponent } from 'react';
import { ListTypes } from 'types/generalTypes';
import CharacterCard, { CharacterCardProps } from './character/CharacterCard';
import EpisodeCard, { EpisodeCardProps } from './episode/EpisodeCard';
import LocationCard, { LocationCardProps } from './location/LocationCard';

const cards: Record<
  ListTypes,
  | (({ item }: CharacterCardProps) => JSX.Element)
  | (({ item }: LocationCardProps) => JSX.Element)
  | (({ item }: EpisodeCardProps) => JSX.Element)
> = {
  [ListTypes.character]: CharacterCard,
  [ListTypes.location]: LocationCard,
  [ListTypes.episode]: EpisodeCard,
};

export default cards;
