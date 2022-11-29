import React, { useState } from 'react'
import Register from './pages/registration/Register'
import ResetPassword from './pages/ResetPassword'

const DEFAULT_VALUE = {
  value: '',
  error: false,
  helperText: 'Require'
}

const DEFAULT_CONTENT_DATA = {
  fisrtName: DEFAULT_VALUE,
  lastName: DEFAULT_VALUE,
  email: DEFAULT_VALUE,
  phone: DEFAULT_VALUE,
  password: DEFAULT_VALUE,
  ConfirmPassword: DEFAULT_VALUE,
  gender: DEFAULT_VALUE,
  id_PatienType: DEFAULT_VALUE,
  dateNaissance: DEFAULT_VALUE,
  taille: DEFAULT_VALUE,
  poids: DEFAULT_VALUE,
  GroupeSanguin: DEFAULT_VALUE,
  nbreGross: DEFAULT_VALUE,
  nbreEnfant: DEFAULT_VALUE,
  nbreFausseCouche: DEFAULT_VALUE,
  adress: DEFAULT_VALUE,
  ResetPassword: DEFAULT_VALUE,
  ConfirmPasswordResetPassword: DEFAULT_VALUE
}

export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setStep] = useState(1)
  const [usersData, setUsersData] = useState(
    DEFAULT_CONTENT_DATA
  )

  const resetContent = () => setUsersData(DEFAULT_CONTENT_DATA)

  return (
    <div>
      <multiStepContext.Provider value={{ DEFAULT_CONTENT_DATA, resetContent, usersData, setUsersData, currentStep, setStep}}>
        <Register />
        <ResetPassword/>
      </multiStepContext.Provider>
    </div>
  )

}
export default StepContext