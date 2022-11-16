import React from 'react'
import { Field } from 'formik'
import { Grid, TextareaAutosize } from '@mui/material'



function StepTwoo() {

  return (
    <div>

      <Grid align='center'>
        <img src='./assets/logo.png' alt='logo' className='logoStyle' />
        <h1> Sign up </h1>
        <p1>Welcome, create your account now and get free online assistance with best doctors of mybesthealth</p1>
      </Grid>


      <div className='Age-taille-poids'>
        <div>
          <label htmlFor='age'  >Date de naissance :</label>
          <Field name='age' type='text' />
        </div>
        <div>
          <label htmlFor='taille'  >taille :</label>
          <Field name='taille' type='number' />
        </div>
        <div>
          <label htmlFor='poids'>Poids :</label>
          <Field name='poids' type='number' />
        </div>
      </div>

      <div className='Age-taille-poids'>
        <label for="GSanguin">Groupe sanguin:</label>
        <select name="GSanguin" id="cars">
          <option name=''></option>
          <option name='oplus'>O+</option>
          <option value="saab">O-</option>
          <option value="mercedes">A+</option>
          <option value="mercedes">A-</option>
          <option value="mercedes">B+</option>
          <option value="mercedes">B+</option>
          <option value="mercedes">AB+</option>
          <option value="mercedes">AB+</option>
        </select>
      </div>

      <div className='Age-taille-poids' >
        <div>
          <label htmlFor='age'  >Nombre de grossesse :</label>
          <Field name='nbregrossesse' type='number' />
        </div>
        <div>
          <label htmlFor='nbreEnfant'  >Nombre d'enfant:</label>
          <Field name='nbreEnfant' type='number' />
        </div>
        <div>
          <label htmlFor='nbreFcouche'>Nombre de fausse couche :</label>
          <Field name='nbreFcouche' type='number' />
        </div>
      </div>

      <div className='Age-taille-poids'>
        <label htmlFor='medicPrescrit'>Médicaments prescrits par le medecin</label>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Empty"
          style={{ width: 200 }}
          name='medicPrescrit'
        />
      </div>

      <div className='Age-taille-poids'>
        <label htmlFor='examenProchain'>Examen avant le prochain rendez-vous</label>
        <TextareaAutosize
          placeholder="Empty"
          style={{ width: 200 }}
          name='examenProchain'
        />
      </div>

      <div className='Age-taille-poids'>
        <label htmlFor='prochainRdv'>Date du prochain rendez-vous</label>
        <Field type='date' name='prochainRdv' />
      </div>

      <div className='button' >
        <button type='button'>BACK</button>
        <button type='submit'>NEXT</button>
      </div>

    </div>
  )
}

export default StepTwoo