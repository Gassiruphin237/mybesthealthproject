import React from 'react'
import './TextInput.css'

function TextInput({label, name, type, value, placeholder, onValueChange, error=false, helperText}) {
  return (
    <div className='text-input' >
        <label>{label}</label>
        <input 
          name={name}
          type={type}
          value={value} 
          placeholder={placeholder} 
          onChange={(e) => {
          onValueChange(e.target.value)
        }}/>
        {error ? (
          <span className='error-message'>
           {helperText}
        </span>
        ) : null}
        
    </div>
  )
}

export default TextInput