import React from 'react';
import Featured from "./featured/Featured";
import Matches from "./matches/Matches";
import MeetPlayer from "./meet_player/MeetPlayer";
import Promotion from "./promotion/Promotion";

const Home = () => {
    return (
        <div className={"bck_blue"}>
            <Featured/>
            <Matches/>
            <MeetPlayer/>
            <Promotion/>
        </div>
    );
};

export default Home;