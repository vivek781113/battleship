import React from 'react';
import hit from '../../assets/images/Hit.png';
import miss from '../../assets/images/Miss.png';

const Cell: React.FC<{ cellState: any, onCellClick: any, x: any, y: any }> = ({ cellState, onCellClick, x, y }) => {

    const onClick = (x: any, y: any, cellState: any) => {
        if (cellState !== 'miss' && cellState != 'hitted')
            onCellClick(x, y);
    }

    return (
        <div>
            <div onClick={() => onClick(x, y, cellState)} className='cellStyle'>
                {cellState === 'miss' && <img src={miss} className='miss' alt='miss' width='auto' height='auto' />}
                {cellState === 'hitted' && <img src={hit} className='hitted' alt='hitted' width='auto' height='auto' />}
            </div>
        </div>
    )
}

export default Cell;