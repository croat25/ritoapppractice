import React, { useEffect, useState } from 'react';
import MatchView from './MatchView';
import { SummonersMatchesProps } from '../../data/MetaData';
import { fetchWholeMatchHistoryOfSummoner } from '../../api/MatchApi';


const SummonersMatchesComponent: React.FC<SummonersMatchesProps> = props => {
    const [error, setError] = useState<any>(undefined);
    const [data, setData] = useState<any>(null);
    
    useEffect(() => {
        fetchWholeMatchHistoryOfSummoner(props.encryptedSummonerId)
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