import React from 'react';
import { PhotoProps } from '../../data/MetaData';


const ImageComponent: React.FC<PhotoProps> = props => {

    return (
        <div>
            <img src = {`/Ranked-Emblems/Emblem_${props.tier}.png`} />
        </div>
    )
}

export default ImageComponent;