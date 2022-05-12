import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate, useParams } from 'react-router-dom';

import Button from 'components/button/Button';
import EpisodeCard from 'components/card/EpisodeCard';
import paths from 'components/navigation/paths';

import axios from 'config/axios';
import useTypeSelector from 'hooks/useTypeSelector';
import { EpisodeProps } from 'types/episodeTypes';

import style from './CharacterInfo.module.scss';

type CharacterParams = {
  id: string;
};

interface ServerResponseArray {
  data: EpisodeProps[];
}

interface ServerResponseObject {
  data: EpisodeProps;
}

export default function CharacterInfo(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [episodes, setEpisodes] = useState<EpisodeProps[]>([]);

  let { id } = useParams<CharacterParams>();
  if (typeof id === 'undefined') {
    id = '1';
  }
  const { data } = useTypeSelector((state) => state.character);
  const character = data[+id - 1];

  const ids: string[] = [];
  character.episode.map((url) => ids.push(url.slice(40)));
  const pages = ids.join();

  const fetchStarringEpisodes = (): EpisodeProps[] => {
    if (ids.length > 1) {
      axios
        .get(`${paths.episode}/${pages}`)
        .then((response: ServerResponseArray) => {
          const episodes: EpisodeProps[] = response.data;
          setEpisodes(episodes);
        });
    } else {
      axios
        .get(`${paths.episode}/${pages}`)
        .then((response: ServerResponseObject) => {
          const episodes: EpisodeProps[] = [];
          episodes.push(response.data);
          setEpisodes(episodes);
        });
    }

    return episodes;
  };

  useEffect(() => {
    fetchStarringEpisodes();
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.Content}>
        <div className={style.CharacterInfo}>
          <div className={style.Image}>
            <img src={character.image} alt={character.name} />
          </div>
          <div className={style.Info}>
            <p>
              {t('info.status')} <b>{character.status}</b>
            </p>
            <p>
              {t('info.species')} <b>{character.species}</b>
            </p>
            <p>
              {t('info.type')} <b>{character.type}</b>
            </p>
            <p>
              {t('info.gender')} <b>{character.gender}</b>
            </p>
          </div>
        </div>
        <div className={style.CharacterDescription}>
          <div className={style.Name}>{character.name}</div>
          <div className={style.Description}>
            <div className={style.Links}>
              {t('character.origin', { name: character.origin.name })} <br />
              <a href={character.episode[0]}>{t('character.firstSeen')}</a>
            </div>
            <div className={style.Episodes}>
              <InfiniteScroll
                dataLength={data.length}
                next={fetchStarringEpisodes}
                hasMore
                loader={<h4>{t('loading')}</h4>}
                height={450}
                endMessage={<h1>{t('scrollEnd')}</h1>}
              >
                <div className={style.EpisodesContainer}>
                  {episodes.map((item) => (
                    <EpisodeCard key={item.id} episode={item} />
                  ))}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Button}>
        <Button label={t('back')} onClick={(): void => navigate(-1)} />
      </div>
    </div>
  );
}
