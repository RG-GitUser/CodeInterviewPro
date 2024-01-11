import React, { useState } from "react";
const [question, setQuestion] = useState("");
const [answer, setAnswer] = useState("");
const [category, setCategory] = useState("MongoDB");

const QuestionForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div>
        <label>Answer:</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>

      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="MongoDB">MongoDB</option>
          <option value="Express">Express</option>
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="JavaScript Fundamentals">
            JavaScript Fundamentals
          </option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Restful APIs">Restful APIs</option>
          <option value="GraphQL">GraphQL</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionForm;
