import React from 'react';
import './MatchGrid.css';
import { MatchGridProps } from './data/MetaData';


const MatchGrid: React.FC<MatchGridProps> = props => {


    const matches = props.matches;
    return <table className='MatchGrid'>
    <colgroup>
        <col span={1} style={{ width: '1px' }} />
        <col span={1} style={{ width: 'auto' }} />
        <col span={1} style={{ width: '25%' }} />
        <col span={1} style={{ width: '25%' }} />
    </colgroup>
    <tr>
        <th></th>
    </tr>
    { matches.map((m, i) =>
        <tr key={ i }>
            <td>{ m.champion }</td>
            <td>{ m.role }</td>
            <td>{ m.lane }</td>
        </tr>
    ) }
</table>;

}



export default MatchGrid;