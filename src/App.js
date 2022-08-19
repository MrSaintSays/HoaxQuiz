import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Did Trump collude with Russia in the 2016 election?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
    {
      questionText: "Was the Steele Dossier hooker story true?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
    {
      questionText: "Did Russia pay bounties on US soldiers in Afganistan?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
    {
      questionText: 'Did Trump call Neo-Nazis "Fine people"?',
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
    {
      questionText:
        "Did Trump suggest drinking/injecting bleach to fight COVID?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
    {
      questionText: "Did Trump overfeed koi fish in Japan?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
    {
      questionText:
        "Did Trump clear protestors with tear gas for a bible photo op?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
    {
      questionText: "Was Hunter Biden's laptop Russian disinformation?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
    {
      questionText: "Were elections fair because no court found major fraud?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
    {
      questionText:
        'Was January 6th an "insurrection" to overthrow the government?',
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [correctList, setCorrectList] = useState([]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
	  setCorrectList(correctList => [...correctList, currentQuestion])
      setScore(score + 1);
    } 

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (<><h2>HoaxQuiz</h2>
    <div className="app">
      {showScore ? (
        <>
          <div>
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
            <table>
              {questions.map((question, i) => (
                <tr><td className={!correctList.includes(i) && "incorrect-answer"}> {question.questionText}</td><td key={i}>{question.answerOptions.find(answer => answer.isCorrect).answerText} </td></tr>
              ))}
            </table>
			{/* <button>Share</button> */}
          </div>
        </>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption,i) => (
              <button key={i}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div></>
  );
}
