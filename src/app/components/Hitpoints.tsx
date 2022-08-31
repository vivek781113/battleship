import React from 'react';
import hitSmall from '../../assets/images/Hit small.png';
import missSmall from '../../assets/images/Miss small.png';
export const Hitpoints: React.FC<{ hitPoints: any, hits: any }> = ({ hitPoints, hits }) => {
    let hitPointsCounter = [];
    let hitCounter = [];
    for (let i = 0; i < hitPoints; i++) {
        hitPointsCounter.push(
            (<span key={i}><img src={missSmall} className='hitPointMark' /></span>)
        )
    }
    for (let j = 0; j < hits; j++) {
        hitCounter.push(
            (<span key={j}><img src={hitSmall} className='hitPointMark' /></span>)
        )
    }
    return (
        <span>
            {hitPointsCounter}{hitCounter}
        </span>
    )
}



export default Hitpoints;