import React from 'react'
import AI from '../assets/img/AI.png';
import Globe from '../assets/img/globe.png';
import { Board } from './Helper';
import Clock from './Clock';
const Option = ({ board, setBoard, vsAI, setVsAI, keyPressed, setKeyPressed, resetAll }) => {
    let clockShown = keyPressed; //only shown when key is pressed
    const resetGame = () => {
        resetAll()
        setKeyPressed(false);
        if (vsAI)
            setVsAI(!vsAI);
    }
    const setPlayAI = () => {
        setVsAI(!vsAI);
    }

    return (
        <div className="gamemodes">
            <p className='modes modes-ai' onClick={setPlayAI}>
                <img className="ai" src={AI}></img>
                <span class="important" style={{ marginTop: '0px' }}>
                    <br />
                    Play against our best AI <br />
                    <strong>The first one 2048 wins</strong>!
                </span>
            </p>

            <img className="smallsection" src="https://www.romaincousin.fr/2048/img/waves.gif" alt="" style={{ width: 200, float: 'left' }}></img>
            <h1 className='or'> OR  </h1>
            <img className="smallsection" src="https://www.romaincousin.fr/2048/img/waves.gif" alt="" style={{ width: 200, float: 'left' }}></img>


            <p className='modes' onClick={resetGame}>
                <img className="brain" src={Globe}></img>
                <span class="important" style={{ marginTop: '0px' }}>
                    <br />
                    Break the world record:<br/>
                    <strong>Current record is 14s</strong>
                </span>
            </p>



            <img src="https://www.romaincousin.fr/2048/img/waves.gif" alt=""></img>
            {!keyPressed?
                <p className='directions'>
                    <img src="https://www.romaincousin.fr/2048/img/keyboard.gif" style={{ marginTop: '3px' }} alt="Keyboard animation - 2048 animated edition"></img>
                    <span class="important" style={{ marginTop: '0px' }}>Combine the identical <br />numbers and try to reach <br /><strong>the 2048 animation</strong>!</span>
                </p>:
                <Clock board={board}/>
            }
        </div>
    )
}

export default Option
