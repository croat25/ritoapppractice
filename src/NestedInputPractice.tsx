import React, {useState, useEffect } from 'react';
import './App.css';
import ImageComponent from './ImageComponent';
import { fetchSummonerBySummoner } from './api/SummonerApi';
import { PropingShit } from './data/MetaData';

const InputPractice1: React.FC<PropingShit> = props => {
    const [error, setError] = useState<any>(undefined);
    const [data1, setData1] = useState<any>(null);
    
    useEffect(() => {
        fetchSummonerBySummoner(props.name)
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
                <ImageComponent tier={data1[0].tier} />
            </div>
                );
    }
}
export default InputPractice1;