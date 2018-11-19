import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';

export default (
    <Switch>
        <Route component={Home} exact path='/'/>
        {/* <Route component={Map} path='/map'/> */}
    </Switch>
)
