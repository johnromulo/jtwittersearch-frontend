import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from '@pages/Search';
import Show from '@pages/Show';
import Filter from '@pages/Filter';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Filter} />
    <Route path="/search" component={Search} />
    <Route path="/show" component={Show} />
  </Switch>
);

export default Routes;
