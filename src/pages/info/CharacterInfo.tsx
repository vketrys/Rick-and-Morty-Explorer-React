import Button from 'components/button/Button';
import EpisodeCard from 'components/card/EpisodeCard';
import { CharacterSelectors, EpisodeSelectors } from 'components/selectors';
import React, { Dispatch, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { EpisodeAction, EpisodeProps } from 'types/episodeTypes';
import style from './CharacterInfo.module.scss';

type CharacterParams = {
  id: string;
};

export default function CharacterInfo(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();

  let { id } = useParams<CharacterParams>();
  if (typeof id === 'undefined') {
    id = '1';
  }
  const { data } = CharacterSelectors();

  const character = data[+id - 1];
  const ids: number[] = [];
  const episodes: EpisodeProps[] = [];

  const singleEpisodes = (): void => {
    character.episode.map((url) => {
      const num = url.slice(40);
      return ids.push(+num);
    });
    const { data } = EpisodeSelectors();
    console.log(data);

    ids.map((id) => episodes.push(data[id - 1]));
  };

  console.log(ids);
  console.log(episodes);
  singleEpisodes();

  return (
    <div className={style.Container}>
      <div className={style.Content}>
        <div className={style.CharacterInfo}>
          <div className={style.Image}>
            <img src={character.image} alt={character.name} />
          </div>
          <div className={style.Info}>
            {character.status}
            {character.species}
            {character.type}
            {character.gender}
          </div>
        </div>
        <div className={style.CharacterDescription}>
          <div className={style.Name}>{character.name}</div>
          <div className={style.Description}>
            <div className={style.Links}>
              Origin: {character.origin.name} <br />
              <a href={character.episode[0]}>First seen at ...</a>
            </div>
            <div className={style.Episodes}>
              <InfiniteScroll
                dataLength={data.length}
                next={singleEpisodes}
                hasMore
                loader={<h4>{t('loading')}</h4>}
                height={450}
                endMessage={<h1>{t('scrollEnd')}</h1>}
              >
                {episodes.map((item) => (
                  <EpisodeCard key={item.id} episode={item} />
                ))}
              </InfiniteScroll>
              Episodes
            </div>
          </div>
        </div>
      </div>
      <div className={style.Button}>
        <Button label={t('home')} onClick={(): void => navigate('*')} />
      </div>
    </div>
  );
}
