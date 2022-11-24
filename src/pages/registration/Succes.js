import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { multiStepContext } from '../../StepContext'



function Succes() {
  const { currentStep, setStep, userData, setUserData, submitData } = useContext(multiStepContext)
  return (
    <div className='container'>
      <h1>Succes page</h1>
      <div>
        <Button
          variant="contained"
          type='submit'
          className='buttonStyle1'
          color='secondary'
          onClick={()=>setStep(2)}
        // onClick={onSubmit}
        >
          BACK
        </Button>
        <Button
          variant="contained"
          type='submit'
          className='buttonStyle1'
          onClick = {onsubmit}
        // onClick={onSubmit}
        >
          SAVE
        </Button>
      </div>
    </div>
  )
}

export default Succes