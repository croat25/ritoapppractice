import React, { useState } from 'react';
import { ParticipantIdentityDto, ParticipantDto} from '../../data/MetaData';
import PageLoader from '../tools/PageLoader';
import ParticipantStats from './ParticipantStats';

export interface MatchParticipantsProps{
    participantIdentityDto: ParticipantIdentityDto[],
    participantDto: ParticipantDto[]
}

export interface tempList{
    participantId: number,
    teamId: number
}

const MatchParticipants: React.FC<MatchParticipantsProps> = props => {
    
    const [data,setData] = useState<MatchParticipantsProps | any>(undefined);
    const [error, setError] = useState<MatchParticipantsProps>();

    var particapants = props.participantIdentityDto.filter(participantName => participantName.participantId);
    var teamBlueParticipants = props.participantDto.filter(blueTeam => blueTeam.teamId === 100);
    var teamRedParticipants = props.participantDto.filter(redTeam => redTeam.teamId === 200);
    console.log(teamBlueParticipants);
    console.log(teamRedParticipants);
    console.log(particapants);
    var team1Names = teamBlueParticipants.map(({participantId}) => props.participantIdentityDto.find(p => p.participantId === participantId));
    var team2Names = teamRedParticipants.map(({participantId}) => props.participantIdentityDto.find(p => p.participantId === participantId));
    if(error){
        return <pre>{error.toString()}</pre>
    }
    else{
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Red Team</th>
                            <th>Blue Team</th>
                        </tr>
                        {
                            <tr>
                                <td>
                                    {
                                        team1Names.map((p, index) => 
                                            <tr>
                                                {
                                                    <ParticipantStats summonerName={p?.player.summonerName} participantStats={teamBlueParticipants[index]} />
                                                }
                                            </tr>
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        team2Names.map((p, index) => 
                                            <tr>
                                                {
                                                    <ParticipantStats summonerName={p?.player.summonerName} participantStats={teamBlueParticipants[index]} />
                                                }
                                            </tr>
                                        )
                                    }
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MatchParticipants;