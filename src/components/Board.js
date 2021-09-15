import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import Cell from './Cell';
import { Board } from './Helper';
import useEvent from '../hooks/useEvent';
import GameOverlay from './GameOverlay';
const BoardView = ({board, setBoard,keyPressed, setKeyPressed, boardAI, resetAll }) => {
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
    
    useEffect(()=> {
        console.log(board)
    }, [board]);
    
    useEvent('keydown',
        (event) => handleKeydown(event) 
    )

    // useEffect(()=>{
    //     window.addEventListener('keydown', ()=>{
    //         console.log('Solo yasuo?')
    //     })
    // },[]);

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
        resetAll();
        setKeyPressed(false);
    }

    return (
        <div className="normal-game">
            <div className="details-box" >
                <div className="resetButton" onClick={resetGame}>Reset Game</div>
                <div className="score-box">
                    <div className="score-header">SCORE</div>
                    {board.score} 
                </div>
            </div>
            <div className="board">
                {cells}
                {tiles}
                <GameOverlay onRestart={resetGame} boardHuman={board} boardAI={boardAI} resetAll={resetAll}/>
            </div>
        </div>
    )
}




export default BoardView;
