import React, { useState } from 'react';
import Tile from './Tile';
import Cell from './Cell';
import { Board } from './Helper';
import useEvent from '../hooks/useEvent';
import GameOverlay from './GameOverlay';
const BoardAI = ({vsAI}) => {
    const [board, setBoard] = useState(new Board());
    const handleKeydown = (event)=>{
        if (board.hasWon()){
            return;
        }
        if (event.keyCode>=37 && event.keyCode<=40){
            let dir = event.keyCode - 37;
            let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board);
            let newBoard = boardClone.move(dir);
            setBoard(newBoard);
        }
    }

    useEvent('keydown',
        (event) => handleKeydown(event) 
    )


    const cells = board.cells.map((row, rowIndex) => {
        return (
            <div key={rowIndex}>
                {row.map((col, colIndex) => {
                    return <Cell key={rowIndex * board.size + colIndex} />
                })}
            </div>
        )
    });
    const tiles = board.tiles.filter((tile) => tile.value !== 0).map((tile, index) => {
        return <Tile tile={tile} key={index} />
    });
    
    const resetGame=()=>{
        setBoard(new Board());
    }

    return (
        <div className='ai-board' style={{display:vsAI? 'block':'none'}}>
            <div className="details-box" >
                <div className="resetButton">AI is on the go!</div>
                <div className="score-box">
                    <div className="score-header">SCORE</div>
                    {board.score} 
                </div>
            </div>
            <div className="board">
                {cells}
                {tiles}
                <GameOverlay onRestart={resetGame} board={board}/>
            </div>
        </div>
    )
}




export default BoardAI;
