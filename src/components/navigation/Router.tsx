import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MainPage from 'pages/main/Main';
import ContentList from 'pages/contentList/ContentList';
import routerPaths from './paths';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path={routerPaths.home} element={<MainPage />} />
      <Route
        path={routerPaths.character}
        element={<ContentList type="character" />}
      />
      <Route
        path={routerPaths.episode}
        element={<ContentList type="episode" />}
      />
      <Route
        path={routerPaths.location}
        element={<ContentList type="location" />}
      />
    </Routes>
  );
}

export default Router;
