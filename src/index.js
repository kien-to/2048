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
    window.addEventListener('keydown',()=>{ if (!keyPressed){
        setKeyPressed(true);
    }})
    return (
    <>
        <Header />
        <div className='game-container'>
            <BoardView board={board} setBoard={setBoard} keyPressed={keyPressed} setKeyPressed={setKeyPressed}/>
            
            <Option board={board} setBoard={setBoard} vsAI={vsAI} setVsAI={setVsAI} mode={mode} keyPressed={keyPressed} setKeyPressed={setKeyPressed} />
            
            {/* <AIThinking vsAI={vsAI}/> */}
            <BoardAI board={boardAI} setBoard={setBoardAI} vsAI={vsAI}/>
        </div>
    </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));