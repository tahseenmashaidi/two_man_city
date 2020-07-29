import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import PlayerCard from "../ui/player_card";
import Stripes from "../../Resources/images/stripes.png";
import {firebasePlayers,firebase} from "../../firebase";
import {firebaseLoop} from "../ui/mise";
import {Promise} from 'core-js';

class TheTeam extends Component {
    state={
        loading:true,
        players:[]
    };
    componentDidMount() {
        firebasePlayers.once('value').then(snapshot =>{
            const players= firebaseLoop(snapshot);
            let promises = [];
            for (let key in players){
                promises.push(
                    new Promise((resolve,reject)=>{
                        firebase.storage().ref('players').child(players[key].image)
                            .getDownloadURL().then(url =>{
                                players[key].url=url;
                                resolve();

                        })
                    })
                )
            }
            Promise.all(promises).then(()=>{
                this.setState({
                    loading:false,
                    players
                })
            })
        })
    }
    showPlayerByCategory=(category)=> (
        this.state.players ?
            this.state.players.map((player,i)=>{
                return player.position === category ?
                    <Fade left delay={i * 100} key={i}>
                        <div className={"item"}>
                            <PlayerCard
                                number={player.number}
                                name={player.name}
                                lastname={player.lastname}
                                bck={player.url}
                            />
                        </div>
                    </Fade>
                  : null
            })
            : null

    );
    render() {
        console.log(this.state.players);
        return (
            <div className={"the_team_container"}
                 style={{
                     background:`url(${Stripes}) repeat`
                 }}
            >
                {!this.state.loading ?
                    <div>
                        <div className={"team_category_wrapper"} style={{paddingBottom:"20px"}}>
                            <div className={"title"}>Keeper</div>
                            <div className={"team_cards"}>
                                {this.showPlayerByCategory('Keeper')}
                            </div>
                        </div>
                        <div className={"team_category_wrapper"}>
                            <div className={"title"}>Defence</div>
                            <div className={"team_cards"}>
                                {this.showPlayerByCategory('Defence')}
                            </div>
                        </div>
                        <div className={"team_category_wrapper"}>
                            <div className={"title"}>Midfield</div>
                            <div className={"team_cards"}>
                                {this.showPlayerByCategory('Midfield')}
                            </div>
                        </div>
                        <div className={"team_category_wrapper"}>
                            <div className={"title"}>Strikers</div>
                            <div className={"team_cards"}>
                                {this.showPlayerByCategory('Striker')}
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
        );
    }
}

export default TheTeam;