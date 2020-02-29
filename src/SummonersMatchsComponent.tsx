import React, { useEffect, useState } from 'react';
import  {ritoAPI}  from './appsettings.json';
import MatchView from './MatchView';
export interface SummonersMatchesProps{
    encryptedSummonerId: string
}

async function fetchData(encryptedSummonerId: string) {
    const proxyUrl = "https://polar-cove-15690.herokuapp.com/";
    const response = await fetch(proxyUrl + `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${encodeURI(encryptedSummonerId)}?api_key=${ritoAPI}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache'
        });
    return await response.json();
}

const SummonersMatchesComponent: React.FC<SummonersMatchesProps> = props => {
    const [error, setError] = useState<any>(undefined);
    const [data, setData] = useState<any>(null);
    // const name = useParams<{ name: string }>().name;
    
    useEffect(() => {
        fetchData(props.encryptedSummonerId)
        .then(data => setData(data))
        .catch(err => setError(err));
    },[props.encryptedSummonerId]);

    console.log(data);
    if (error) {
        return <pre>{ error.toString() }</pre>;
    } else if (data == null) {
        return <pre>Loading...</pre>;
    } else {
        return  (
            <div>
                <MatchView matches={data.matches} />
                <pre>{JSON.stringify(data.matches.slice(0,20) ,null,2)}</pre>

            </div>
                );
    }
}

export default SummonersMatchesComponent;