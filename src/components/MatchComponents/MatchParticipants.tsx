import React, { useState } from 'react';
import { ParticipantIdentityDto, ParticipantDto} from '../../data/MetaData';

export interface MatchParticipantsProps{
    participantIdentityDto?: ParticipantIdentityDto[],
    participantDto?: ParticipantDto[]
}

export interface tempList{
    participantId: number,
    teamId: number
}

const MatchParticipants: React.FC<MatchParticipantsProps> = props => {
    const [data,setData] = useState<MatchParticipantsProps | any>(undefined);
    var particapants = props.participantIdentityDto!.filter(participantName => participantName.participantId);
    var teamBlueParticipants = props.participantDto!.filter(blueTeam => blueTeam.teamId === 100);
    var teamRedParticipants = props.participantDto!.filter(redTeam => redTeam.teamId === 200);
    console.log(teamBlueParticipants);
    console.log(teamRedParticipants);
    console.log(particapants);
    var team1Names = teamBlueParticipants!.map(({participantId}) => props.participantIdentityDto!.find(p => p.participantId === participantId));
    var team1Names2 = team1Names as ParticipantIdentityDto[];
    console.log(team1Names);
    var team2Names = teamRedParticipants!.map(({participantId}) => props.participantIdentityDto!.find(p => p.participantId === participantId));
    var team2Names2 = team2Names as ParticipantIdentityDto[];
    console.log(team2Names);

    const items = []
    let yolo = 0;
    if(!team1Names!.length === undefined){
        yolo = team1Names!.length as number;
    }
    
    let i = 0;
    while(i < yolo){
        items.push(<tr>
            <td>{team1Names2[i].player.summonerName}</td>
            <td>{team2Names2[i].player.summonerName}</td>
        </tr>);
    }
    return(
        <div>
            {/* {props.participantIdentityDto?.map(player => {
            props.participantDto?.map(teamId =>{

                if(player.participantId === teamId.participantId) {
                    return (<li>summerId: {player.player.summonerName} TeamId: {teamId.teamId} </li>);
                }
            })
            })} */}
            <table>
                <tbody>
                <tr>
                    <th>Red Team</th>
                    <th>Blue Team</th>
                </tr>
                    {items.map((y) => y)}
                </tbody>
            </table>
        </div>
    );
}

export default MatchParticipants;