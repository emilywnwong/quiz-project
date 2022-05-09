import React from 'react'
import Score from './Score'
import Feedback from './Feedback'



const Result = ({score, fullScore}) => {

    const percentage = score / fullScore ;
    console.log('percentage')
    return (
        <div className='score-section'>
        <Score score={score} fullScore={fullScore}/>
        <Feedback percentage={percentage}/>
        </div>
    )
}

export default Result