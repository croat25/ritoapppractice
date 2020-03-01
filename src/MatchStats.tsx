import React, { useState, useEffect } from 'react';
import './MatchStats.css';
import ToggleTray from './ToggleTray';
import {ritoAPI} from './appsettings.json';
import { MatchStatsProps } from './data/MetaData';

async function fetchData(gameId: number) {
    const proxyUrl = "https://polar-cove-15690.herokuapp.com/";
    const response = await fetch(proxyUrl + `https://na1.api.riotgames.com/lol/match/v4/matches/${encodeURI(gameId.toString())}?api_key=${ritoAPI}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache'
        });
    return await response.json();
}

const MatchStats : React.FC<MatchStatsProps> = props =>{
    const [data,setData] = useState<any | undefined>(undefined);
    const [error, setError] = useState<any>(undefined);

    useEffect(() => {
        fetchData(props.match.gameId)
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