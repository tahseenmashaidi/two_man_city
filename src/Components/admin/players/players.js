import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import AdminLayout from "../../../Hoc/AdminLayout";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import {firebaseMatches} from "../../../firebase";
import {firebaseLoop, reverseArray} from "../../ui/mise";

class AdminPlayers extends Component {
    state={
        isLoading:true,
        matches:[]
    };
    componentDidMount() {
        firebaseMatches.once('value').then(snapshot=>{
            const matches=firebaseLoop(snapshot);

            this.setState({
                isLoading:false,
                matches:reverseArray(matches)
            })
        });
    }
    render() {
        return (
            <AdminLayout>
                Admin player
            </AdminLayout>
        );
    }
}

export default AdminPlayers;