import React, { useState } from "react";
import "./quiz.css";
import { FlipCard } from "../../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const goToNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      return;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex === 0) {
      return;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <div className="quiz">
        <FlipCard key={currentQuestion.id} question={currentQuestion.question} answer={currentQuestion.answer} />
      </div>
      <div className="buttons">
        <button onClick={goToPreviousQuestion}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={goToNextQuestion}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Quiz;
