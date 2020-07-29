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
import AddEditPlayer from "./Components/admin/matches/AddEditPlayer";
import TheTeam from "./Components/the_team/TheTeam";
import TheMatch from "./Components/the_match/TheMatch";
import NotFound from "./Components/ui/NotFound";

const Routes=(props)=>{
    return(
        <Layout>
            <Switch>
                <PrivateRoute {...props} path={"/admin_player/add_players"}  exact component={AddEditPlayer}/>
                <PrivateRoute {...props} path={"/admin_player/add_players/:id"}  exact component={AddEditPlayer}/>
                <PrivateRoute {...props} path={"/admin_players"}  exact component={AdminPlayers}/>
                <PrivateRoute {...props} path={"/admin_matches/edit_match"}  exact component={AddEditMatch}/>
                <PrivateRoute {...props} path={"/admin_matches/edit_match/:id"}  exact component={AddEditMatch}/>
                <PrivateRoute {...props} path={"/admin_matches"}  exact component={AdminMatches}/>
                <PrivateRoute {...props} path={"/dashboard"}  exact component={Dashboard}/>
                <PublicRoute {...props} restricted={true} path={"/login"}  exact component={Login}/>
                <PublicRoute {...props} restricted={false} path={"/the_team"}  exact component={TheTeam}/>
                <PublicRoute {...props} restricted={false} path={"/the_matches"}  exact component={TheMatch}/>
                <PublicRoute {...props} restricted={false} path={"/"}  exact component={Home}/>
                <PublicRoute {...props} restricted={false} component={NotFound}/>
            </Switch>
        </Layout>
     )
};
export default Routes;
