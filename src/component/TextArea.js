import { TextareaAutosize } from '@mui/material'
import React from 'react'
import '../styles/TextInput.css'

function TextArea({ label, value, placeholder, onValueChange, error = false, helperText }) {
  return (
    <div className='text-input' >
      <label>{label}</label>
      <TextareaAutosize
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onValueChange(e.target.value)
        }}></TextareaAutosize>
      {error ? (
        <span className='error-message'>
          {helperText}
        </span>
      ) : null}
    </div>
  )
}

export default TextArea