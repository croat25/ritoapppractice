import React, {useState, useEffect } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

async function fetchData(name: string) {
    const proxyUrl = "https://polar-cove-15690.herokuapp.com/";
    const response = await fetch(proxyUrl + `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(name)}?api_key=RGAPI-00112694-4570-4e9c-be3f-909afda1d212`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache'
        });
    return await response.json();
}

const InputPractice = () => {
    const [error, setError] = useState<any>(undefined);
    const [data, setData] = useState<any>(null);
    const name = useParams<{ name: string }>().name;

    useEffect(() => {
        fetchData(name)
        .then(data => setData(data))
        .catch(err => setError(err));
    },[name]);

    if (error) {
        return <pre>{ error.toString() }</pre>;
    } else if (data == null) {
        return <pre>Loading...</pre>;
    } else {
        return  <pre>{JSON.stringify(data,null,2)}</pre>;
    }
}
export default InputPractice;