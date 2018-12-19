import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';
import Examples from './Components/Examples/Examples';
import About from './Components/About/About';
import Specs from './Components/Specs/Specs';
import Testimonials from './Components/Testimonials/Testimonials';

export default (
    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={Gallery} exact path='/gallery'/>
        <Route component={Examples} exact path='/examples'/>
        <Route component={About} exact path='/about'/>
        <Route component={Specs} exact path='/specs'/>
        <Route component={Testimonials} exact path='/testimonials'/>
    </Switch>
)