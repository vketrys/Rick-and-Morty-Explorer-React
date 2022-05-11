import Button from 'components/button/Button';
import EpisodeCard from 'components/card/EpisodeCard';
import paths from 'components/navigation/paths';
import axios from 'config/axios';
import useTypeSelector from 'hooks/useTypeSelector';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate, useParams } from 'react-router-dom';
import { EpisodeProps } from 'types/episodeTypes';
import style from './CharacterInfo.module.scss';

type CharacterParams = {
  id: string;
};

interface ServerResponse {
  data: EpisodeProps[];
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
  // eslint-disable-next-line prefer-const
  let ids: string[] = [];

  character.episode.map((url) => {
    const num = url.slice(40);
    return ids.push(num);
  });

  const pages = ids.join();

  const fetchStarringEpisodes = (): EpisodeProps[] => {
    axios.get(`${paths.episode}/${pages}`).then((response: ServerResponse) => {
      const episodes: EpisodeProps[] = response.data;
      console.log(episodes);

      setEpisodes(episodes);
    });
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
                next={fetchStarringEpisodes}
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
