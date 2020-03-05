import React from 'react';
import { ParticipantIdentityDto} from '../../data/MetaData';

export interface MatchParticipantsProps{
    participantIdentityDto?: ParticipantIdentityDto[]
}


const MatchParticipants: React.FC<MatchParticipantsProps> = props => {

    return(
        <div>
            {props.participantIdentityDto?.map( player => <li>player.player.summonerName: {player.player.summonerName} </li>)}
        </div>
    );
}

export default MatchParticipants;