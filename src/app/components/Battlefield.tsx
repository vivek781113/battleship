import React from 'react';
import { Col } from 'react-bootstrap';
import Cell from './Cell';

const Battlefield: React.FC<{ battleField: any, hits: any, onCellClick: any, screenMode: any }> = ({ battleField, hits, onCellClick, screenMode }) => {
    return (
        <Col lg={5} md={6} sm={12} xs={12} className='battleFieldPanel'>
            {!battleField &&
                <table className={`emptyBattleField ${screenMode === 'tablet' && 'centered'}`}>
                    <tbody>
                        <tr>
                            <td className='emptyBattleField'>
                            </td>
                        </tr>
                    </tbody>
                </table>
            }
            {battleField && hits < 17 &&
                <table className={`battlefieldTable ${screenMode === 'tablet' && 'centered'}`}>
                    <tbody>
                        {battleField.map((row: any[], x: React.Key | null | undefined) => {
                            return (
                                <tr key={x}>{row.map((column, y) => {
                                    return (
                                        <td
                                            key={y}
                                            className='tableCell'
                                        >
                                            <Cell
                                                onCellClick={() => onCellClick(x, y)}
                                                x={x}
                                                y={y}
                                                cellState={column}
                                            />
                                        </td>
                                    )
                                })}</tr>
                            )
                        })}
                    </tbody>
                </table>
            }
            {hits === 17 &&
                <table className={`emptyBattleField ${screenMode === 'tablet' && 'centered'}`}>
                    <tbody>
                        <tr>
                            <td>
                                <div className='text-center'>
                                    <h1>Game over</h1>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            }
        </Col>
    )


}

export default Battlefield;
