import React, { useContext } from 'react'
import SignUp from '../SignUp'
import StepTwoSignUp from '../StepTwoSignUp'
import Succes from './Succes'
import { Stepper, StepLabel, Step } from '@mui/material'
import { multiStepContext } from '../../StepContext'



function Register() {

    const {currentStep} = useContext(multiStepContext)

    function showStep(Step) {
        switch (Step) {
            case 1 :
                return <SignUp/>
            case 2 : 
                return <StepTwoSignUp/>
            case 3 :
                return <Succes/>    
        }
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <div className="center-stepper">
                    <Stepper style={{ width: '50%'}} activeStep={currentStep - 1} orientation="horizontal" >
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                    </Stepper>
                </div>
                {showStep(currentStep)}
            </header>
        </div>
    )
}

export default Register