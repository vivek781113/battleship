import React from 'react'

const Score: React.FC<{ hits: number, shots: number }> = ({ hits, shots }) => {
    return (
        <div className='scorePanel text-center'>
            <div className='scoreHits'>
                <h2 className='scores'>{hits}</h2>
                <hr />
                <p className='scoreText'>Hits</p>
            </div>
            <div className='scoreShots'>
                <h2 className='scores'>{shots}</h2>
                <hr />
                <p className='scoreText'>Shots</p>
            </div>
        </div>
    )
}
export default Score;