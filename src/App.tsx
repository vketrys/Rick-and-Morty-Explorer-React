import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from 'components/layout/Layout';
import Router from 'components/navigation/Router';
import Loader from 'components/loader/Loader';

import store, { persistor } from 'store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Layout>
          <Router />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
