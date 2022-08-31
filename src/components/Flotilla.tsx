import React from 'react'
import Hitpoints from './Hitpoints';

const Flotilla: React.FC<{ flotilla: any }> = ({ flotilla }) => {
    return (
        <ul className='flotillaContainer'>
            {
                flotilla?.map((ship: any, index: any) => {
                    return (
                        <li key={index} className='shipItem'>
                            <img src={ship.icon} className="shipIcon" alt="shipIcon" />
                            <Hitpoints hitPoints={ship.hitPoints - ship.hits} hits={ship.hits} />
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default Flotilla;