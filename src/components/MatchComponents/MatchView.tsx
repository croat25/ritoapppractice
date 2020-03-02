import React from 'react';
import MatchStats from './MatchStats';
import { MatchViewProps } from '../../data/MetaData';

const MatchView: React.FC<MatchViewProps> = props =>
    <>
    {props.matches.slice(0, 20).map(m => <MatchStats match={m} />)}
    </>;

export default MatchView;