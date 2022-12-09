import React, { useState, useCallback } from 'react'
import "./Search.css"
const Search = ({ onChange }) => {
    const [value, setValue] = useState("")
    const handleChange = useCallback((e) => {
        onChange(e.target.value)
        setValue(e.target.value)
    }, [onChange, setValue])
    return (
        <input type="text" onChange={handleChange} value={value} className='search-bar' placeholder='Название' />
    )
}

export default Search