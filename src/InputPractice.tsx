import React, {useState, useEffect } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import InputPractice1 from './NestedInputPractice';
import SummonersMatchesComponent from './SummonersMatchsComponent';
import { fetchSummonerByName } from './api/SummonerApi';

const InputPractice = () => {
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
                <InputPractice1 name={data.id}/>
                <SummonersMatchesComponent encryptedSummonerId={data.accountId} />
            </div>
            );
    }
}
export default InputPractice;