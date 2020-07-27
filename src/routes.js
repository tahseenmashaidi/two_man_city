import React from 'react';
import Layout from "./Hoc/Layout";
import { Switch, Route } from 'react-router-dom';

import Home from './Components/home/Home';
import Login from "./Components/login/Login";
import Dashboard from "./Components/admin/Dashboard";
import PrivateRoute from "./Components/route_auth/PrivateRoute";
import PublicRoute from "./Components/route_auth/PublicRoute";
import AdminMatches from "./Components/admin/matches/matches";
import AddEditMatch from "./Components/admin/matches/AddEditMatch";
import AdminPlayers from "./Components/admin/players/players";

const Routes=(props)=>{
    console.log(props);
    return(
        <Layout>
            <Switch>
                <PrivateRoute {...props} path={"/admin_players"}  exact component={AdminPlayers}/>
                <PrivateRoute {...props} path={"/admin_matches/edit_match"}  exact component={AddEditMatch}/>
                <PrivateRoute {...props} path={"/admin_matches/edit_match/:id"}  exact component={AddEditMatch}/>
                <PrivateRoute {...props} path={"/admin_matches"}  exact component={AdminMatches}/>
                <PrivateRoute {...props} path={"/dashboard"}  exact component={Dashboard}/>
                <PublicRoute {...props} restricted={true} path={"/login"}  exact component={Login}/>
                <PublicRoute {...props} restricted={false} path={"/"}  exact component={Home}/>
            </Switch>
        </Layout>
     )
};
export default Routes;
