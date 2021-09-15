import React, { useState } from 'react';
import Tile from './Tile';
import Cell from './Cell';
import { Board } from './Helper';
import useEvent from '../hooks/useEvent';
import GameOverlay from './GameOverlay';
import solve from './solve';
const BoardAI = ({ vsAI, board, setBoard, boardHuman, resetAll }) => {

   

    const AIMove = () => {//take in the board and decide the next move
        let cboard = new Array(4);
        for (let i = 0; i < 4; i++) {
            cboard[i] = new Array(4);
            for (let j = 0; j < 4; j++) {
                cboard[i][j] = board.cells[i][j].value
            }
        }
        if (board.hasWon()) {
            return;
        }
        if (!board.hasLost()) {
            let dir = solve(cboard);
            let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board);
            let newBoard = boardClone.move(dir);
            setBoard(newBoard);
        }
    }

    useEvent('keydown',
    ()=> AIMove())



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

    const resetGame = () => {
        setBoard(new Board());
    }

    return (
        <div className='ai-board' style={{ display: vsAI ? 'block' : 'none' }}>
            <div className="details-box" >
                {/* <div className="aiButton">AI is on the go!</div> */}
                <div className="score-box">
                    <div className="score-header">SCORE</div>
                    {board.score}
                </div>
            </div>
            <div className="board">
                {cells}
                {tiles}
                <GameOverlay onRestart={resetGame} boardAI={board} boardHuman={boardHuman} resetAll={resetAll} />
            </div>
        </div>
    )
}




export default BoardAI;
