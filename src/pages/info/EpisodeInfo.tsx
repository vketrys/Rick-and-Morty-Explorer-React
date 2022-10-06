import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from 'components/button/Button';
import { URL_ID_POSITION } from 'components/selectors';
import CharacterCard from 'components/card/character/CharacterCard';
import fetchStarringCharacters from 'store/action-creators/starring/characters/fetchStarringCharacters';

import { Character } from 'types/characterTypes';
import { Episode } from 'types/episodeTypes';
import { ListTypes } from 'types/generalTypes';

import useTypeSelector from 'hooks/useTypeSelector';
import useScrollSizer from 'hooks/useScollSizer';

import style from './LocationInfo.module.scss';

interface EpisodeInfoProps {
  item: Episode;
}

export default function EpisodeInfo({ item }: EpisodeInfoProps): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { characters } = useTypeSelector((state) => state.starringCharacters);

  // const { id } = useParams<EpisodeParams>();
  // const idNum = id ?? '1';

  // const episode = useEpisode(idNum);

  const ids: string[] = [];
  item.characters.map((url) => {
    const id = url.slice(URL_ID_POSITION.character);
    ids.push(id);
    return ids;
  });

  useEffect(() => {
    dispatch(fetchStarringCharacters(ids));
  }, [item]);

  return (
    <div className={style.Container}>
      <div className={style.Content}>
        <div className={style.LocationInfo}>
          <div className={style.Name}>{item.name}</div>
          <div className={style.Description}>
            <p className={style.DescriptionNote}>{item.episode}</p>
            <p className={style.DescriptionNote}>{item.air_date}</p>
          </div>
        </div>
        <div className={style.Characters}>
          <div className={style.Label}>{t('info.starring')}</div>
          <div className={style.Cards}>
            <InfiniteScroll
              dataLength={characters.length}
              next={(): Character[] => characters}
              hasMore
              loader={<h4>{t('loading')}</h4>}
              height={useScrollSizer(ListTypes.episode)}
              endMessage={<h1>{t('scrollEnd')}</h1>}
            >
              {characters.map((item) => (
                <CharacterCard key={item.id} item={item} />
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
      <div className={style.Button}>
        <Button label={t('back')} onClick={(): void => navigate(-1)} />
      </div>
    </div>
  );
}
