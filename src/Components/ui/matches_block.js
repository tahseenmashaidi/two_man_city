import React from 'react';

const MatchesBlock = ({match}) => {
    return (
        <div className={"match_block"}>
            <div>
                {match.final ? match.date: `Match not played yet: ${match.date}`}
            </div>
            <div className={"match_wrapper"}>
                <div className={"match_top"}>
                    <div className={"left"}>
                        <div className="icon" style={{background:`url(/team_icons/${match.localThmb}.png)`}}>
                        </div>
                        <div className={"team_name"}>{match.local}</div>
                    </div>
                    <div className={"right"}>
                        {match.final ? match.resultLocal: '-'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchesBlock;