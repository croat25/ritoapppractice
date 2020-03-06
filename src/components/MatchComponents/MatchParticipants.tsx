import React from 'react';
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
    var particapants = props.participantIdentityDto?.filter(participantName => participantName.participantId);
    var teamBlueParticipants = props.participantDto?.filter(blueTeam => blueTeam.teamId === 100);
    var teamRedParticipants = props.participantDto?.filter(redTeam => redTeam.teamId === 200);
    console.log(teamBlueParticipants);
    console.log(teamRedParticipants);
    console.log(particapants);
    var team1Names = teamBlueParticipants?.map(({participantId}) => props.participantIdentityDto?.find(p => p.participantId === participantId));
    console.log(team1Names);
    var team2Names = teamRedParticipants?.map(({participantId}) => props.participantIdentityDto?.find(p => p.participantId === participantId));
    console.log(team2Names);
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
                <tr>
                    <th>Red Team</th>
                    <th>Blue Team</th>
                </tr>
                <tr>
                    <td>{team1Names?.map((playerName,i) => <li key={i}>{playerName?.player.summonerName}</li>)}</td>
                    <td>{team2Names?.map((playerName,i) => <li key={i}>{playerName?.player.summonerName}</li>)}</td>
                </tr>
            </table>
        </div>
    );
}

export default MatchParticipants;