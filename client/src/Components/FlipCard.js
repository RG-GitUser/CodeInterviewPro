import React, {useState } from 'react';
import "./FlipCard.css"; // Importing the CSS file

const FlipCard= ({ question }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };






};

export default FlipCard;