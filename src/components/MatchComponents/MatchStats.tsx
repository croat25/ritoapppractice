import React, { useState, useEffect, useContext } from 'react';
import './MatchStats.css';
import ToggleTray from '../tools/ToggleTray';
import { MatchStatsProps, MatchDto } from '../../data/MetaData';
import { GetMatchByGameId } from '../../api/MatchApi';
import MatchParticipants from './MatchParticipants';
import PageLoader from '../tools/PageLoader';


const MatchStats : React.FC<MatchStatsProps> = props =>{
    const [data,setData] = useState<MatchDto>();
    const [error, setError] = useState<MatchDto>();
    let yolo1 = {} as MatchDto;
    useEffect(() => {
        GetMatchByGameId(props.match.gameId)
        .then(data => setData(data))
        .catch(error => setError(error));
    },[props.match.gameId]);

    if(error){
        return <pre>{error.toString()}</pre>
    }
    else if(data == null){
        return <PageLoader />
    }
    else{
        var particapants = data.participantIdentities.filter(participantName => participantName.participantId);
        var teamBlueParticipants = data.participants.filter(blueTeam => blueTeam.teamId === 100);
        var teamRedParticipants = data.participants.filter(redTeam => redTeam.teamId === 200);
        
        var team1Names = teamBlueParticipants.map(({participantId}) => data.participantIdentities.find(p => p.participantId === participantId));
        console.log(team1Names);
        var team2Names = teamRedParticipants.map(({participantId}) => data.participantIdentities.find(p => p.participantId === participantId));
        console.log(team2Names);
        
        return <div className='MatchStats'>
        <ToggleTray title={ props.match.timestamp.toString() }>
            <div className='MatchStats-container'>
                <div style={{ gridArea: 'metap' }}>
                    Season : { props.match.season }
                </div>
                {/* <MatchParticipants participantIdentityDto={data?.participantIdentities} /> */}
                <div style={{ gridArea: 'winp' }}>
                </div>
                <MatchParticipants participantIdentityDto={data.participantIdentities} participantDto={data.participants} />
            </div>
        </ToggleTray>
    </div>
    }
}

export default MatchStats;