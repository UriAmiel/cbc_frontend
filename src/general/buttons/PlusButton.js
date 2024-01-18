import React from 'react';
import './buttons.css';

export default function PlusButton({onClick}) {
    return (
        <div>
            <button className="plus-button" onClick={onClick}>
                +
            </button>
        </div>
    );
};