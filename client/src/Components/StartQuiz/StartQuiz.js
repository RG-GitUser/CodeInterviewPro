import React from "react";
import "./startQuiz.css";

const StartQuiz = ({ initialCategories, activeCategories, setActiveCategories }) => {
  const handleStartQuiz = () => {
    console.log("Quiz started! ", activeCategories);
  };

  return (
    <div>
      <button className="startButton" onClick={handleStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartQuiz;
