import React from 'react'
import TryAgainLogo from '../assets/img/try-again.gif'
const GameOverlay = ({onRestart, boardAI, boardHuman, resetAll}) => {
    if (boardHuman.hasWon() && (!boardAI.hasWon() || boardAI.hasLost()) || (boardAI.hasLost()&&!boardHuman.hasLost()))
    {
        return (
            <div className="tile2048">

            </div>
        )
    }
    else if(boardHuman.hasLost() || (!boardHuman.hasWon()&&boardAI.hasWon())  ) {
        return (
            <div className="gameOver" onClick={resetAll}>
                <img src={TryAgainLogo} alt="Try again" style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer'
                }}></img>
            </div>
        )
    }
    return (
        null
    )
}

export default GameOverlay