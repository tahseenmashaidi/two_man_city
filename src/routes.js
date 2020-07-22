import React from 'react';
import Layout from "./Hoc/Layout";
import { Switch, Route } from 'react-router-dom';

import Home from './Components/home/Home';
import Login from "./Components/login/Login";

const Routes=(props)=>{
    return(
        <Layout>
            <Switch>
                <Route exact component={Login} path="/login"/>
                <Route exact component={Home} path="/"/>
            </Switch>
        </Layout>
     )
};
export default Routes;
