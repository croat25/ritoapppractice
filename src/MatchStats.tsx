import React from 'react';
import './MatchStats.css';
import ToggleTray from './ToggleTray';

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

const MatchStats : React.FC<MatchStatsProps> = props =>
    <div className='MatchStats'>
        <ToggleTray title={ props.match.gameId.toString() }>
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

export default MatchStats;