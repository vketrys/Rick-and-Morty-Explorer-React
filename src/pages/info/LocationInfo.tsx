import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from 'components/button/Button';
import { URL_ID_POSITION } from 'components/selectors';
import CharacterCard from 'components/card/character/CharacterCard';
import fetchStarringCharacters from 'store/action-creators/starring/characters/fetchStarringCharacters';
import routerPaths from 'components/navigation/paths';

import { Character } from 'types/characterTypes';
import { Location } from 'types/locationTypes';
import { ListTypes } from 'types/generalTypes';

import useScrollSizer from 'hooks/useScollSizer';
import useTypeSelector from 'hooks/useTypeSelector';

import style from './LocationInfo.module.scss';

interface LocationInfoProps {
  item: Location;
}

export default function LocationInfo({ item }: LocationInfoProps): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { characters } = useTypeSelector((state) => state.starringCharacters);

  // const { id } = useParams<LocationParams>();
  // const idNum = id ?? '1';

  // const location = useLocation(idNum);

  const ids: string[] = [];
  item.residents.map((url) => {
    const id = url.slice(URL_ID_POSITION.character);
    ids.push(id);
    return ids;
  });

  useEffect(() => {
    dispatch(fetchStarringCharacters(ids));
  }, [item]);

  let label: string;
  if (ids.length) {
    label = t('info.residents');
  } else label = t('info.noResidents');

  return (
    <div className={style.Container}>
      <div className={style.Content}>
        <div className={style.LocationInfo}>
          <div className={style.Name}>{item.name}</div>
          <div className={style.Description}>
            <p className={style.DescriptionNote}>{item.type}</p>
            <p className={style.DescriptionNote}>{item.dimension}</p>
          </div>
        </div>
        <div className={style.Characters}>
          <div className={style.Label}>{label}</div>
          <div className={style.Cards}>
            <InfiniteScroll
              dataLength={characters.length}
              next={(): Character[] => characters}
              hasMore
              loader={<h4>{t('loading')}</h4>}
              height={useScrollSizer(ListTypes.location)}
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
        <Button
          label={t('back')}
          onClick={(): void => navigate(routerPaths.goBack)}
          isCTA
        />
      </div>
    </div>
  );
}
