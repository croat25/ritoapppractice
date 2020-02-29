import React from 'react';


export interface PhotoProps{
    tier : string
}


const ImageComponent: React.FC<PhotoProps> = props => {

    return (
        <div>
            <img src = {`/Ranked-Emblems/Emblem_${props.tier}.png`} />
        </div>
    )

}

export default ImageComponent;