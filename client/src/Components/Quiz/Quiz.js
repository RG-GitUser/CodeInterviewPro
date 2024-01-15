import React from "react";
import "./quiz.css";
import { FlipCard } from "../../Components";

const Quiz = ({ questions }) => {
  return (
    <div>
      <div className="quiz">
        {questions.map((question) => (
          <FlipCard key={question.id} question={question.question} answer={question.answer} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
