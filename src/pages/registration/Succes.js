import React, { useContext } from 'react'
import { Button, FormControlLabel, Checkbox } from '@mui/material'
import { multiStepContext } from '../../StepContext'
import axios from 'axios';





function Succes() {

  const { setStep, usersData, setUserData, resetContent } = useContext(multiStepContext)

  const [checked, setChecked] = React.useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }


  const submitData = React.useCallback(() => {
    const data = {
      LastName: usersData.lastName.value,
      FirstName: usersData.fisrtName.value,
      Address: usersData.adress.value,
      email: usersData.email.value,
      numberUser: usersData.phone.value,
      password: usersData.password.value,
      password_confirmation: usersData.ConfirmPassword.value,
      id_PatienType: usersData.id_PatienType.value,
      dateNaissance: usersData.dateNaissance.value,
      Gender: usersData.gender.value,
      taille: usersData.taille.value,
      poids: usersData.poids.value,
      groupeSanguin: usersData.GroupeSanguin.value,
      nbreGross: usersData.nbreGross.value,
      nbreEnfant: usersData.nbreEnfant.value,
      nbreFausseCouche: usersData.nbreFausseCouche.value,
    }

          axios.post('http://172.17.4.96:8000/api/register/', data)
              .then(function (res) {
                  console.log(res)
                
              })
              .catch(function (error) {
                  console.log(error);
              })



    console.log(data);
    alert('Form submitted')
    // resetContent()


  }, [setStep, usersData, setUserData])


  const keys = React.useMemo(() => Object.keys(usersData), [usersData])

  console.log('Keys tables  : ', keys)

  return (
    <div className='container'>
      <h1>Succes page</h1>

      <div>
        {keys.map((key, index) => (
          <div key={index}>{key} : {usersData[key].value}</div>
        ))}
      </div>

      <div>
        <FormControlLabel
          className='fieldStyle'
          control={
            <Checkbox
              name="TermCondition"
            />

          }
          label="I have read and accept the terms and conditions."

        />
      </div>

      <div>
        <Button
          variant="contained"
          type='submit'
          className='buttonStyle1'
          color='secondary'
          onClick={() => setStep(2)}
        >
          BACK
        </Button>
        <Button
          variant="contained"
          type='submit'
          className='buttonStyle1'
          onClick={submitData}
        >
          SAVE
        </Button>
      </div>
    </div>
  )
}

export default Succes