import React, { useState } from 'react'
import Register from './pages/registration/Register'

const DEFAULT_VALUE = {
  value: '',
  error: false,
  helperText: 'Require'
}

export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setStep] = useState(1)
  const [usersData, setUsersData] = useState(
    {
      fisrtName: DEFAULT_VALUE,
      lastName: DEFAULT_VALUE,
      email: DEFAULT_VALUE,
      phone: DEFAULT_VALUE,
      password: DEFAULT_VALUE,
      ConfirmPassword: DEFAULT_VALUE,
      gender: DEFAULT_VALUE,
      category: DEFAULT_VALUE,
      dateNaissance: DEFAULT_VALUE,
      taille: DEFAULT_VALUE,
      poids: DEFAULT_VALUE,
      GroupeSanguin: DEFAULT_VALUE,
      nbreGross: DEFAULT_VALUE,
      nbreEnfant: DEFAULT_VALUE,
      nbreFausseCouche: DEFAULT_VALUE,
      adress: DEFAULT_VALUE

    }
  )

  function submitData() {

  }
  return (
    <div>
      <multiStepContext.Provider value={{ usersData, setUsersData, currentStep, setStep }}>
        <Register />
      </multiStepContext.Provider>
    </div>
  )

}
export default StepContext