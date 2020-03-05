import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SummonerInfoStats from '../components/SummonerInfoComponents/SummonerInfoStats';
import SummonersMatchesComponent from '../components/MatchComponents/SummonersMatchsComponent';
import { fetchSummonerByName } from '../api/SummonerApi';

const SummonerSearchResultPage = () => {
    const [error, setError] = useState<any>(undefined);
    const [data, setData] = useState<any>(null);
    const name = useParams<{ name: string }>().name;

    useEffect(() => {
        fetchSummonerByName(name)
        .then(data => setData(data))
        .catch(err => setError(err));
    },[name]);

    if (error) {
        return <pre>{ error.toString() }</pre>;
    } else if (data == null) {
        return <pre>Loading...</pre>;
    } else {
        return (
            <div>
                <pre>{JSON.stringify(data,null,2)}</pre> 
                <SummonerInfoStats name={data.id}/>
                
                {/* //add a table then move the below function into that table */}
                <SummonersMatchesComponent encryptedSummonerId={data.accountId} />
            </div>
            );
    }
}
export default SummonerSearchResultPage;