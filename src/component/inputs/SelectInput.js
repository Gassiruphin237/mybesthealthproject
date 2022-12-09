import React from 'react'
import './TextInput.css'

function SelectInput({name,label, type, value, placeholder, onValueChange, error=false, helperText, options}) {
  return (
    <div className='text-input' >
        <label>{label}</label>
        <select
          name={name}
          type={type}
          value={value} 
          placeholder={placeholder} 
          onChange={(e) => {
            onValueChange(e.target.value)
        }}>
          {options.map((item, e) => {
            return <option key={e} value={item.value}>
              {item.label}
            </option>
          })}
        </select>
        {error ? (
          <span className='error-message'>
           {helperText}
        </span>
        ) : null}
        
    </div>
  )
}

export default SelectInput