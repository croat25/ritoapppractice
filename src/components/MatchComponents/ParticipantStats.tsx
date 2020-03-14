import React, { useState } from 'react';
import { ParticipantDto } from '../../data/MetaData';
import ToggleTray from '../tools/ToggleTray';
import PageLoader from '../tools/PageLoader';

export interface ParticpiantProps{
    summonerName? : string,
    participantStats: ParticipantDto
}
// const MatchStats : React.FC<MatchStatsProps> = props =>{
const ParticipantStats: React.FC<ParticpiantProps> = props =>{
    return(
        <div>
            <ToggleTray title={ props.summonerName  }>
                <div>
                        <ul>
                            <li>
                            {props.participantStats.stats.item0}
                            </li>
                            <li>
                            {props.participantStats.stats.item1}
                            </li>
                            <li>
                            {props.participantStats.stats.item2}
                            </li>
                            <li>
                            {props.participantStats.stats.item3}
                            </li>
                            <li>
                            {props.participantStats.stats.item4}
                            </li>
                            <li>
                            {props.participantStats.stats.item5}
                            </li>
                        </ul>
                        
                        <pre>spells below</pre>
                        <pre>{props.participantStats.spell1Id}</pre>
                        <pre>{props.participantStats.spell2Id}</pre>

                        <pre>Runes below</pre>
                        <pre>{props.participantStats.stats.perk0}</pre>
                        <pre>{props.participantStats.stats.perk1}</pre>
                        <pre>{props.participantStats.stats.perk2}</pre>
                        <pre>{props.participantStats.stats.perk3}</pre>
                        <pre>{props.participantStats.stats.perk4}</pre>
                        <pre>{props.participantStats.stats.perk5}</pre>
                </div>
            </ToggleTray>
                
        </div>
    );

}

export default ParticipantStats;