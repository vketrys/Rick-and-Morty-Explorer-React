import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MainPage from 'pages/main/Main';
import ContentList from 'pages/contentList/ContentList';
import paths from './paths';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path={paths.home} element={<MainPage />} />
      <Route
        path={paths.character}
        element={<ContentList type="character" />}
      />
      <Route path={paths.episode} element={<ContentList type="episode" />} />
      <Route path={paths.location} element={<ContentList type="location" />} />
    </Routes>
  );
}

export default Router;
