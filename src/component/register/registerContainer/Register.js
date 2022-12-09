import React, { useContext } from 'react'
import SignUp from '../registerStep/SignUp'
import StepTwoSignUp from '../registerStep/StepTwoSignUp'
import Succes from '../registerStep/Succes'
import { Stepper, StepLabel, Step } from '@mui/material'
import { multiStepContext } from '../../../StepContext'
import './registerContainer.css'



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
        <div className='registerContainer'>
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