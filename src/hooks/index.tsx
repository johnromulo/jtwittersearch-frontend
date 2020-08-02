import React from 'react';

import { TwitterProvider } from './useTwitter';

const AppProvider: React.FC = ({ children }: React.Props<any>) => (
  <TwitterProvider>{children}</TwitterProvider>
);
export default AppProvider;
