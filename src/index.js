import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { Board } from './components/Helper';
import BoardView from './components/Board';
import BoardAI from './components/BoardAI';
import Option from './components/Option';
import Header from './components/Header';
import AIThinking from './components/AIThinking';
import './main.scss';
import './styles.scss';
const App = () => {
    const [board, setBoard] = useState(new Board());//board ai is an independent board
    const [boardAI, setBoardAI] = useState(new Board());
    const [vsAI, setVsAI] = useState(false);
    const [mode, setMode] = useState(0);// -1 on startup no key pressed. 
    //0 on key pressed and mode is -1. 1 is pressed and vsAI is true.
    const [keyPressed, setKeyPressed] = useState(false); //on startup flase, clicked true and clock start, set false again when gameover or win
    window.addEventListener('keydown',(event)=>{ if (!keyPressed){
        if (event.keyCode<=40 && event.keyCode>=37){
            setKeyPressed(true);
        }
    }})
    const resetWholeGame = () => {
        setBoard(new Board);
        setBoardAI(new Board);
        
    }
    return (
    <>
        <Header />
        <div className='game-container'>
            <BoardView board={board} setBoard={setBoard} keyPressed={keyPressed} setKeyPressed={setKeyPressed} boardAI={boardAI} resetAll={resetWholeGame}/>
            
            <Option board={board} setBoard={setBoard} vsAI={vsAI} setVsAI={setVsAI} mode={mode} keyPressed={keyPressed} setKeyPressed={setKeyPressed} resetAll = {resetWholeGame}/>
            
            {/* <AIThinking vsAI={vsAI}/> */}
            <BoardAI boardHuman={board} board={boardAI} setBoard={setBoardAI} vsAI={vsAI} resetAll={resetWholeGame}/>
        </div>
    </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));