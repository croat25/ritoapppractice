import React, {useState, useEffect } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import  { ritoAPI }  from './appsettings.json';

async function fetchData1(name: string) {
    const proxyUrl = "https://polar-cove-15690.herokuapp.com/";
    const response = await fetch(proxyUrl + `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encodeURI(name)}?api_key=${ritoAPI}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache'
        });
        //HVvQ59VoGpczxJ54MEVctWutjIem3yGE3pD38dmwKYOcco4
    return await response.json();
}

const InputPractice1 = (props: { name: string; }) => {
    const [error, setError] = useState<any>(undefined);
    const [data1, setData1] = useState<any>(null);
    // const name = useParams<{ name: string }>().name;
    
    useEffect(() => {
        fetchData1(props.name)
        .then(data1 => setData1(data1))
        .catch(err => setError(err));
    },[props.name]);

    if (error) {
        return <pre>{ error.toString() }</pre>;
    } else if (data1 == null) {
        return <pre>Loading...</pre>;
    } else {
        return  (
            <div>
                <pre>{JSON.stringify(data1 ,null,2)}</pre>
            </div>
                );
    }
}
export default InputPractice1;