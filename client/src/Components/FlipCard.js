import React, {useState } from 'react';
import "./FlipCard.css"; // Importing the CSS file

const FlipCard= ({ question }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div className='flip-card' onCLick={handleClick}>
            <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}> 
                <div className='flip-card-front'>   
                    <p>Click to view the question</p>
                </div>
                <div className='flip-card-back'>
                    <p>{question}</p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;