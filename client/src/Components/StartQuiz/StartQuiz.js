import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import "./startQuiz.css";
import { Quiz, Categories } from "../../Components";

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

const StartQuiz = ({ activeCategories, initialCategories, setActiveCategories }) => {
  const { loading, error, data } = useQuery(GET_QUESTIONS, {
    variables: { categories: activeCategories },
  });
  const [showComponent, setShowComponent] = useState(false);

  const handleStartQuiz = () => {
    if (loading) {
      console.log("Loading...");
    } else if (error) {
      console.error("Error:", error);
    } else {
      console.log("Received response:", data.startQuiz);
      setShowComponent(true);
    }
  };

  if (showComponent && data) {
    return (
      <div>
        <Quiz questions={data.startQuiz.questions} />
      </div>
    );
  } else {
    return (
      <div>
        <Categories initialCategories={initialCategories} activeCategories={activeCategories} setActiveCategories={setActiveCategories} />

        <button className="startButton" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>
    );
  }
};

export default StartQuiz;
