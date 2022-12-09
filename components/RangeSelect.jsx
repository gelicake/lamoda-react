import React from 'react'
import { useState } from 'react'
import "./RangeSelect.css"
const RangeSelect = ({ onChange }) => {
    const [values, setValues] = useState({ min: undefined, max: undefined })
    const handleChange = ({ target }) => {
        const newValues = {
            ...values,
            [target.name]: target.value
        }
        setValues(newValues)
        onChange(newValues.min, newValues.max)
    }
    return (
        <div className='rangeselect'>
            <input type="number" value={values.min} name='min' onChange={handleChange} placeholder='От' />
            -
            <input type="number" value={values.max} name='max' onChange={handleChange} placeholder='До' />
        </div>
    )
}

export default RangeSelect