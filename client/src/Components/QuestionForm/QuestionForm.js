import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import "./questionForm.css";

const ADD_QUESTION_MUTATION = gql`
  mutation AddQuestion($question: String!, $answer: String!, $category: String!) {
    addQuestion(question: $question, answer: $answer, category: $category) {
      success
      message
      question {
        id
        question
        answer
        category
      }
    }
  }
`;

const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("MongoDB");
  const [addQuestion, { data, loading, error }] = useMutation(ADD_QUESTION_MUTATION);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await addQuestion({
      variables: { question, answer, category },
    });

    console.log("response: ", response);

    if (response.data.addQuestion.success) {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      setQuestion("");
      setAnswer("");
      setCategory("MongoDB");
    } else {
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="question-form-container">
      <h1>Add Question</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </div>

        <div>
          <label>Answer:</label>
          <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        </div>

        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="MongoDB">MongoDB</option>
            <option value="Express">Express</option>
            <option value="React">React</option>
            <option value="Node">Node</option>
            <option value="JavaScript Fundamentals">JavaScript Fundamentals</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Restful APIs">Restful APIs</option>
            <option value="GraphQL">GraphQL</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
      {showSuccessMessage && <div className="success-message">Question added successfully!</div>}

      {showErrorMessage && <div className="error-message">Error adding question. Please try again.</div>}
    </div>
  );
};

export default QuestionForm;
