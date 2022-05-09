import './App.css';
import React, { useState } from 'react';
import Result from './components/Result';
import Questions from './components/Questions';
import Options from './components/Options';

const questions= require('./questions.json').questions; 

function App() {

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
		setCurrentQuestion(0);
		setShowResult(false);
		setScore(0);
	}

	return (
		<div className='app-border'>
			<div className='app'>
				{showResult ? (
					<Result score={score} fullScore={questions.length} handleRestart={handleRestart}/>
					) : (
					<>
						<Questions questions={questions} currentQuestion={currentQuestion}/>
						<Options questions={questions} currentQuestion={currentQuestion} handleAnswerOptionClick={handleAnswerOptionClick}/>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
