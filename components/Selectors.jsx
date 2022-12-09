import React from "react";
import "./Selectors.css";
const Selectors = ({ active, options, onSelect }) => {
    const handleSelect = ({ target }) => {
        onSelect(target.name === active ? "us" : target.name);
    };
    return (
        <div className="selectors-container">
            {options.map((option) => (
                <button
                    name={option}
                    key={option}
                    onClick={handleSelect}
                    className={active === option ? `selector active` : `selector`}
                >
                    {option}{" "}
                </button>
            ))}
        </div>
    );
};

export default Selectors;
