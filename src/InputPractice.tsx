import React, {useState, useEffect } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

async function fetchData(name: string) {

    const response = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/call%20me%20deuce?api_key=RGAPI-aec21832-1da4-4035-b5e4-672548ea3c4c`, {
            method: 'GET',
            mode: 'no-cors',
            referrerPolicy: 'no-referrer',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache',
        })
    return await response.json();
}

const InputPractice = () => {
const [error, setError] = useState<any>(undefined);
const [data, setData] = useState<any>(null);
const name = useParams<{ name: string }>().name;

    useEffect(() => {
        fetchData(name)
        .then(d => d.setData(d))
        .catch(err => setError(err));
    },[name]);

    if (error) {
        return <pre>{ error.toString() }</pre>;
    } else if (data == null) {
        return <pre>Loading...</pre>;
    } else {
        return  <pre>{JSON.stringify(data, null, 2)}</pre>;
    }
}
export default InputPractice;