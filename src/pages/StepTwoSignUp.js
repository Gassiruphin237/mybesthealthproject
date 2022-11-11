import React from 'react'
import { TextField, Autocomplete, TextareaAutosize, Grid, Button, Stack } from '@mui/material';
import '../styles/stepTwo.css'


function StepTwoSignUp() {

    const Categorie = [
        { label: 'Maladie chronique' },
        { label: 'Grossesse' },
        { label: 'Autres' }
    ]
    return (
        <div className='containers'>

            {/* */}

            <Grid className='header'>
                <img src='./assets/logo.png' alt='logo' className='logoStyle' />
                <h1>Welcome back</h1>
                <p1>Enter your login credential</p1>
            </Grid>

            {/* */}

            <div className='categorie'>
                <label>Catégories</label>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Categorie}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} placeholder='Indiquez votre catégorie' />}
                />
            </div>

            {/* */}

            <div>
                <div>
                    <label>Age</label>
                    <input value='' />
                </div>
                <div>
                    <label>Taillle</label>
                    <input value='' />
                </div>
                <div>
                    <label>Poids</label>
                    <input value='' />
                </div>
            </div>

            {/* */}

            <div>
                <label>Lieu de residence</label>
                <input value='' />
            </div>

            {/* */}

            <div>
                <label>Groupe sanguin</label>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Categorie}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params}
                        placeholder='Indiquez votre groupe sanguin' />}
                />
            </div>

            {/* Si c'est un femme enceinte, ces gens champs s'affichent en plus de ceux precédents*/}

            <div>
                <div>
                    <label>Nombre de Grossesse</label>
                    <input value='' />
                </div>
                <div>
                    <label>Nombre d'enfant </label>
                    <input value='' />
                </div>
                <div>
                    <label>Nombre de fausse couche</label>
                    <input value='' />
                </div>
            </div>

            {/*  */}

            <div>
                <label>Medicaments prescrits par le medecin</label>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Minimum 3 rows"
                    style={{ width: 200 }}
                />
            </div>

            {/*  */}

            <div>
                <label>Examen à faire avant prochaine Rdv</label>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Minimum 3 rows"
                    style={{ width: 200 }}
                />
            </div>

            {/*  */}

            <div>
                <label>Date du prochaine Rdv</label>
                <input type='date' />
            </div>
            <div>
                <label>Lieu de residance</label>
                <input type='text' />
            </div>

            {/*  */}

            <div>
                <div>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained">Contained</Button>
                    </Stack>
                </div>

                <div>
                        <Button variant="contained">Contained</Button>
                </div>
            </div>

        </div>
    )
}

export default StepTwoSignUp