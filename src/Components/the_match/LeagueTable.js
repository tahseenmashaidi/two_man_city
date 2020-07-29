import React, {Component} from 'react';
import {firebaseDB} from "../../firebase";
import {firebaseLoop} from "../ui/mise";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const style={
    cell:{
        padding:'4px 16px 4px 11px',
        borderBottom:'1px solid #ffffff',
        color:'#ffffff',
        textAlign:'center'
    }
};
class LeagueTable extends Component {
    state={
        position:[]
    };
    componentDidMount() {
        firebaseDB.ref('positions').once('value').then((snapshot)=>{
            const positions=firebaseLoop(snapshot);
            this.setState({
                position:positions
            })
        })
    }
    showTeamPositions=(pos)=>(
        pos ?
            pos.map((pos,i)=>(
                <TableRow key={i}>
                    <TableCell style={style.cell}>{i+1}</TableCell>
                    <TableCell style={style.cell}>{pos.team}</TableCell>
                    <TableCell numeric style={style.cell}>{pos.w}</TableCell>
                    <TableCell numeric style={style.cell}>{pos.d}</TableCell>
                    <TableCell numeric style={style.cell}>{pos.l}</TableCell>
                    <TableCell numeric style={style.cell}>{pos.pts}</TableCell>
                </TableRow>
            ))
            : null
    );

    render() {
        return (
            <div className={"league_table_wrapper"}>
                <div className={"title"}>
                    League Table
                </div>
                <div style={{background:'#98c6e9'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={style.cell}>Pos</TableCell>
                                <TableCell style={style.cell}>Team</TableCell>
                                <TableCell style={style.cell}>W</TableCell>
                                <TableCell style={style.cell}>L</TableCell>
                                <TableCell style={style.cell}>D</TableCell>
                                <TableCell style={style.cell}>Pts</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.showTeamPositions(this.state.position)}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default LeagueTable;