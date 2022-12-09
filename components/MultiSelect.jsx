import React, { useState } from 'react'
import "./MultiSelect.css"
const MultiSelect = ({ onSelect, options }) => {
    const [selectedOptions, setSelectedOptions] = useState(new Set())

    const handleSelect = ({ target: { name } }) => {
        const newSet = new Set([...selectedOptions])
        newSet.has(name) ? newSet.delete(name) : newSet.add(name)
        setSelectedOptions(newSet)
        onSelect(newSet)
    }

    return (
        <div>
            {options.map((option) => (
                <div key={option} className="multiselect_option">
                    <input type="checkbox" checked={selectedOptions.has(option)} name={option} onChange={handleSelect} />
                    {option}
                </div>
            ))}
        </div>
    )
}

export default MultiSelect