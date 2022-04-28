import React from 'react';

import "./BackButton.css";

export const BackButton = ({ resetBoard }) => {
    return (
        <button className="back-btn" onClick={resetBoard}>Exit</button>           
    )
}
