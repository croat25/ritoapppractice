import React, { useState, useEffect } from 'react';
import './MatchStats.css';
import ToggleTray from './ToggleTray';
import { MatchStatsProps } from './data/MetaData';
import { GetMatchByGameId } from './api/MatchApi';


const MatchStats : React.FC<MatchStatsProps> = props =>{
    const [data,setData] = useState<any | undefined>(undefined);
    const [error, setError] = useState<any>(undefined);

    useEffect(() => {
        GetMatchByGameId(props.match.gameId)
        .then(data => setData(data))
        .catch(error => setError(error));
    },[props.match.gameId]);

    return <div className='MatchStats'>
        <ToggleTray title={ props.match.timestamp.toString() }>
            <div className='MatchStats-container'>
                <div style={{ gridArea: 'metap' }}>
                    Season : { props.match.season }
                </div>
                <div style={{ gridArea: 'winp' }}>
                    Champion: { props.match.champion }
                </div>
            </div>
        </ToggleTray>
    </div>
}

export default MatchStats;