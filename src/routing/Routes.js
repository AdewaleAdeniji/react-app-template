// External Packages
import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute';
import AppTemplate from '../pages';

// #toDo: create 404 error page displayed when user can't login.

export default ({childProps}) =>
    <BrowserRouter>
        <Switch>
            <UnauthenticatedRoute path='/' exact component={AppTemplate} props={childProps} /> 
            

        </Switch>
    </BrowserRouter>
