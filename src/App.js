import './App.css';
import React, { useState } from 'react';
import Result from './components/Result'

const questions= require('./questions.json').questions; 

function App() {

console.log(questions);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowResult(true);
		}
	};

	const handleRestart = () => {
		console.log('clicked')
		setCurrentQuestion(0);
		setShowResult(false);
		setScore(0);
	}

	return (
		<div className='app'>
			{showResult ? (
				<div>

				<Result score={score} fullScore={questions.length}/>
				<button onClick={handleRestart}> Try again! </button>

				</div>
				) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<progress value={currentQuestion} max={questions.length} />
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<img src={questions[currentQuestion].img} />
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button key={answerOption.key} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
