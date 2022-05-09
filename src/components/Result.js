import React from 'react'
import Score from './Score'
import Feedback from './Feedback'

const Result = ({score, fullScore, handleRestart}) => {
    const percentage = score / fullScore ;

    return (
        <div className='score-section'>
        <Score score={score} fullScore={fullScore}/>
        <Feedback percentage={percentage}/>
        <button onClick={() => handleRestart()}> Try again! </button>
        </div>
    )
}

export default Result