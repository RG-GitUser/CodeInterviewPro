import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import "./startQuiz.css";
import { Categories } from "..";



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

const StartQuiz = ({ activeCategories, initialCategories, setActiveCategories, setQuizStarted, setData }) => {
  const { loading, error, data } = useQuery(GET_QUESTIONS, {
    variables: { categories: activeCategories },
  });

  const handleStartQuiz = () => {
    if (activeCategories.length > 0) {
      if (loading) {
        console.log("Loading...");
      } else if (error) {
        console.error("Error:", error);
      } else {
        console.log("Received response:", data.startQuiz);
        setData(data);
        setQuizStarted(true);
      }
    }
  };

  let buttonClass = `startButton ${activeCategories.length > 0 ? "active" : "inactive"}`;

  return (
    <div>
      <Categories initialCategories={initialCategories} activeCategories={activeCategories} setActiveCategories={setActiveCategories} />

      <button className={buttonClass} onClick={handleStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartQuiz;
