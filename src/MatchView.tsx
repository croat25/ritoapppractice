import React from 'react';
import MatchStats from './MatchStats';


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

export interface MatchViewProps{
  matches : MatchinfoProps[];
}

const MatchView: React.FC<MatchViewProps> = props =>
    <>
    {props.matches.map(m => <MatchStats match={m} />)}
    </>;


export default MatchView;