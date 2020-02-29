import React, { useState, useEffect } from 'react';
import './MatchStats.css';
import ToggleTray from './ToggleTray';

// async function fetchData(name: string) {
//     const proxyUrl = "https://polar-cove-15690.herokuapp.com/";
//     const response = await fetch(proxyUrl + `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(name)}?api_key=${ritoAPI}`, {
//             method: 'GET',
//             headers: { 'Content-Type': 'application/json' },
//             cache: 'no-cache'
//         });
//     return await response.json();
// }

export interface MatchinfoProps{
    platformId: string,
    gameId: number,
    champion: number,
    queue: number,
    season: number,
    timestamp: number,
    role: string,
    lane: string
}

export interface MatchStatsProps{
  match : MatchinfoProps;
}

const MatchStats : React.FC<MatchStatsProps> = props =>{
    // [data,setData] = useState<any | undefined>(undefined);
    // const [error, setError] = useState<any>(undefined);

    // useEffect(() =>{
    //     fetchData()
    // })

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