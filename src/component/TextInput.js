import React from 'react'
import '../styles/TextInput.css'

function TextInput({label, type, value,placeholder, onValueChange, error=false, helperText}) {
  return (
    <div className='text-input' >
        <label>{label}</label>
        <input 
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