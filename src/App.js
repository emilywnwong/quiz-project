import './App.css';

import React, { useState } from 'react';


function App() {
  const questions = [
		{
			questionText: 'Which country is this person from?',
			answerOptions: [
				{ answerText: 'Malaysia', isCorrect: false },
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'Japan', isCorrect: true },
				{ answerText: 'Thailand', isCorrect: false },
			],
		},
		{
			questionText: 'Which country is this person from?',
			answerOptions: [
				{ answerText: 'Singapore', isCorrect: false },
				{ answerText: 'Vietnam', isCorrect: true },
				{ answerText: 'Philippines', isCorrect: false },
				{ answerText: 'South Korea', isCorrect: false },
			],
		},
		{
			questionText: 'Which country is this person from?',
			answerOptions: [
				{ answerText: 'North Korea', isCorrect: true },
				{ answerText: 'Hong Kong', isCorrect: false },
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'South Korea', isCorrect: false },
			],
		},
		{
			questionText: 'Which country is this person from?',
			answerOptions: [
				{ answerText: 'Malaysia', isCorrect: false },
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'Japan', isCorrect: false },
				{ answerText: 'Thailand', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
