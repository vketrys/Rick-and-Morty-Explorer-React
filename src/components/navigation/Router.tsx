import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ListTypes } from 'types/generalTypes';

import MainPage from 'pages/main/Main';
import ContentList from 'pages/contentList/ContentList';
import LocationInfo from 'pages/info/LocationInfo';
import CharacterInfo from 'pages/info/CharacterInfo';
import EpisodeInfo from 'pages/info/EpisodeInfo';

import routerPaths from './paths';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path={routerPaths.home} element={<MainPage />} />
      <Route
        path={routerPaths.character}
        element={<ContentList type={ListTypes.character} />}
      />
      <Route
        path={routerPaths.episode}
        element={<ContentList type={ListTypes.episode} />}
      />
      <Route
        path={routerPaths.location}
        element={<ContentList type={ListTypes.location} />}
      />
      <Route path={routerPaths.characterInfo} element={<CharacterInfo />} />
      <Route path={routerPaths.locationInfo} element={<LocationInfo />} />
      <Route path={routerPaths.episodeInfo} element={<EpisodeInfo />} />
    </Routes>
  );
}

export default Router;
