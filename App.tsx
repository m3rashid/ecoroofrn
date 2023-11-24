import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';

import Routes from './src/routes';
import {config} from '@gluestack-ui/config';

const App = (): JSX.Element => {
  return (
    <GluestackUIProvider config={config}>
      <Routes />
    </GluestackUIProvider>
  );
};

export default App;
