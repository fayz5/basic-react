import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Counter from './Counter';
import Search from './Search';
import NotFound from './NotFound';

const Application = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Counter} />
            <Route path='/search' component={Search} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Application;
