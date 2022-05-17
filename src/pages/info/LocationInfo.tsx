import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate, useParams } from 'react-router-dom';

import Button from 'components/button/Button';
import paths from 'components/navigation/paths';
import CharacterCard from 'components/card/CharacterCard';

import axios from 'config/axios';
import useTypeSelector from 'hooks/useTypeSelector';

import { CharacterProps } from 'types/characterTypes';

import style from './LocationInfo.module.scss';

type LocationParams = {
  id: string;
};

interface ServerResponseArray {
  data: CharacterProps[];
}

interface ServerResponseObject {
  data: CharacterProps;
}

export default function LocationInfo(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const { data } = useTypeSelector((state) => state.location);

  let { id } = useParams<LocationParams>();
  if (typeof id === 'undefined') {
    id = '1';
  }

  const location = data[+id - 1];

  const ids: string[] = [];
  location.residents.map((url) => ids.push(url.slice(42)));
  const pages = ids.join();

  const fetchStarringCharacters = (): CharacterProps[] => {
    if (ids.length > 1) {
      axios
        .get(`${paths.character}/${pages}`)
        .then((response: ServerResponseArray) => {
          const characters: CharacterProps[] = response.data;
          setCharacters(characters);
        });
    } else {
      axios
        .get(`${paths.character}/${pages}`)
        .then((response: ServerResponseObject) => {
          const characters: CharacterProps[] = [];
          characters.push(response.data);
          setCharacters(characters);
        });
    }

    return characters;
  };

  const noChars = (): JSX.Element => {
    if (characters.length > 0) {
      return (
        <div className={style.EpisodesContainer}>
          {characters.map((item) => (
            <CharacterCard key={item.id} character={item} />
          ))}
        </div>
      );
    }
    return <p>This place was destroyed</p>;
  };

  useEffect(() => {
    fetchStarringCharacters();
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.LocationInfo}>
        <div className={style.Name}>{location.name}</div>
        <div className={style.Description}>
          {location.type}
          {location.dimension}
        </div>
      </div>
      <div className={style.Characters}>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchStarringCharacters}
          hasMore
          loader={<h4> </h4>}
          height={450}
          endMessage={<h1>{t('scrollEnd')}</h1>}
        >
          <div className={style.EpisodesContainer}>{noChars()}</div>
        </InfiniteScroll>
      </div>
      <div className={style.Button}>
        <Button label={t('back')} onClick={(): void => navigate(-1)} />
      </div>
    </div>
  );
}
