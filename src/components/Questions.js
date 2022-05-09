import React from 'react'

const Questions = ({questions, currentQuestion, handleAnswerOptionClick}) => {

    return (
        <div className='question-section'>
            <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <progress value={currentQuestion} max={questions.length} />
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
            <img src={questions[currentQuestion].img} />
        </div>
    )
}

export default Questions
