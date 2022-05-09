import React from 'react'

const Options = ({questions, currentQuestion, handleAnswerOptionClick}) => {

    return (
        <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button key={answerOption.key} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
        ))}
    </div>
    )
}

export default Options
