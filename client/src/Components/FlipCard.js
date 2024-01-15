import React, {useState } from 'react';
import "./FlipCard.css"; // Importing the CSS file

const FlipCard= ({ question, answer }) => {
    const [isflipped, setisFlipped] = useState(false);

    const handleFlip= () => {
        setisFlipped(!flipped);
    };

    return (
       <div
        className={`flip-card ${isflipped ? "flipped" : ""}`}
        onClick={handleFlip}
       >
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <p>{question}</p>
            </div>
            <div className="flip-card-back">
                <p>{answer}</p>
            </div>
         </div>
       </div>
    );
};

export default FlipCard;