import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo-client'
import "./FlipCard.css"; // Importing the CSS file

const GET_QUESTION = gql`
    query {
        getAllQuestions {
            id
            question
            answer
        }
    }
`;

const FlipCard = () => {
    const { loading, error, data } = useQuery(GET_QUESTION);

    return (
        <div className="flip-card">
            {loading ? (
                <div className="card question-card">
                    Loading...
                </div>
            ) : error ? (
                <div className="card question-card">    
                    Error fetching questions
                </div>
            ) : (
                data.getAllQuestions.map((question) => (
                    <div key={question.id} className="card question-card">
                        <div className="card-inner">
                            <div className="card-front">
                                <p>Click to view question</p>
                            </div>
                            <div className="card-back">
                                <p>{question.question}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
                
    


export default FlipCard;