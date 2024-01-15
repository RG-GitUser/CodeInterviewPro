import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import "./startQuiz.css";

const GET_QUESTIONS = gql`
  query GetQuestions($categories: [String!]!) {
    startQuiz(categories: $categories) {
      success
      message
      questions {
        id
        question
        answer
        category
      }
    }
  }
`;

const StartQuiz = ({ activeCategories }) => {
  const { loading, error, data } = useQuery(GET_QUESTIONS, {
    variables: { categories: activeCategories },
  });

  const handleStartQuiz = () => {
    if (loading) {
      console.log("Loading...");
    } else if (error) {
      console.error("Error:", error);
    } else {
      console.log("Received response:", data.startQuiz);
    }
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
