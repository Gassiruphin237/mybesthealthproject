import React, { useContext, useEffect, useState } from 'react'
import { Field } from 'formik'
import { Grid } from '@mui/material'
import TextInput from '../component/TextInput'
import validator from 'validator'
import '../styles/stepTwo.css'
import '../styles/SignUp.css'
import SelectInput from '../component/SelectInput'
import axios from 'axios'
import { Button } from '@mui/material'
import { multiStepContext } from '../StepContext'


// initialisation des sanguins
const GroupeSanguin = [
    { label: '', value: '' },
    { label: 'AB+', value: 'abPlus' },
    { label: 'AB-', value: 'abMoins' },
    { label: 'A+', value: 'aPlus' },
    { label: 'A-', value: 'aMoins' },
    { label: 'B+', value: 'bPlus' },
    { label: 'B-', value: 'bMooins' },
    { label: 'O+', value: 'oPlus' },
    { label: 'O-', value: 'oMoins' }
]

function StepTwoSignUp() {

    const { usersData, setUsersData, setStep } = useContext(multiStepContext)

    console.log(usersData);
    // ALL STATE

    // Element de recuperation des types de maladies dans la base de donnée
    const [description, setDescription] = useState([])
    useEffect(() => {
        try {
            axios.get('http://172.17.4.31:8000/api/category/')
                .then(function (res) {
                    console.log(res.data.data)
                    setDescription([
                        { label: "", value: '' },
                        ...res.data.data.map((item) => ({
                            label: item.Description,
                            value: item.id,
                        }))
                    ]);
                })
                .catch(function (error) {
                    console.log(error);
                })

        }
        catch (error) {

        }
    }, [])

    // ALL VALLIDATION START HERE

    // Birthday validattion 
    const onAgeChange = React.useCallback((val) => {
        if (validator.isDate(val)) {
            setUsersData(state => ({
                ...state,
                dateNaissance: {
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            }))
            return
        }
        setUsersData(state => ({
            ...state,
            dateNaissance: {
                value: val,
                error: true
            }
        }))
    }, [setUsersData])

    // Taille validattion 
    const onTailleChange = React.useCallback((val) => {
        if ((val === '')) {
            setUsersData(state => ({
                ...state,
                taille: {
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            }))
            return;
        }

        setUsersData(state => ({
            ...state,
            taille: {
                value: val,
                error: false,
            }
        }))
    }, [setUsersData])

    /* Poids validattion */
    const onPoidsChange = React.useCallback((val) => {
        if (validator.isFloat(val)) {
            setUsersData(state => ({
                ...state,
                poids: {
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            }))
            return
        }
        setUsersData(state => ({
            ...state,
            poids: {
                value: val,
                error: true,
            }
        }))

    }, [setUsersData])

    // Groupe sanguin validattion 
    const onGroupeSanguinChange = React.useCallback((val) => {
        if (val === '') {
            setUsersData(state => ({
                ...state,
                groupeSanguin: {
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            }))
        }

        setUsersData(state => ({
            ...state,
            groupeSanguin: {
                value: val,
                error: false,
            }
        }))

    }, [setUsersData])

    /* Nombre de grossese validattion */
    const onNbreGrossChange = React.useCallback((val) => {
        if (validator.isInt(val)) {
            setUsersData(state => ({
                ...state,
                nbreGross: {
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            }))
            return
        }

        setUsersData(state => ({
            ...state,
            nbreGross: {
                value: val,
                error: true,
            }
        }))

    }, [setUsersData])

    // Nombre d'enfant validattion 
    const onNbreEnfantChange = React.useCallback((val) => {
        if (validator.isInt(val)) {
            setUsersData(state => ({
                ...state,
                nbreEnfant: {
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            }))
            return
        }

        setUsersData(state => ({
            ...state,
            nbreEnfant: {
                value: val,
                error: true
            }
        }))


    }, [setUsersData])

    // Nombre de fausse couche validattion 
    const onNbreFausseCoucheChange = React.useCallback((val) => {
        if (validator.isDecimal(val)) {
            setUsersData(state => ({
                ...state,
                nbreFausseCouche: {
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            }))
            return
        }

        setUsersData(state => ({
            ...state,
            nbreFausseCouche: {
                value: val,
                error: true,
            }
        }))


    }, [setUsersData])

    // Recupreation de l'input type de maladie
    const onCategoryChange = React.useCallback((val) => {
        if (val === '') {
            setUsersData(state => ({
                ...state,
                category: {
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            }))
            return;
        }

        setUsersData(state => ({
            ...state,
            category: {
                value: val,
                error: false
            }
        }))

    }, [setUsersData])

    // Adress validattion 
    const onAdressChange = React.useCallback((val) => {
        if (validator.isEmpty(val)) {
            setUsersData(state => ({
                ...state,
                adress: {
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            }))

        } else {

            setUsersData(state => ({
                ...state,
                adress: {
                    value: val,
                    error: false,
                }
            }))

        }
    }, [setUsersData])


    // BEFORE VALIDATE ALL THOSE INPUT MUST BE CHECKED HERE


    function validateAll() {
        return (
            usersData.category.value.trim() !== '',
            usersData.dateNaissance.value.trim() !== '',
            usersData.taille.value.trim() !== '',
            usersData.poids.value.trim() !== '',
            usersData.groupeSanguin.value.trim() !== '',
            usersData.nbreGross.value.trim() !== '',
            usersData.nbreEnfant.value.trim() !== '',
            usersData.nbreFausseCouche.value.trim() !== '',
            usersData.nbreFausseCouche.value.trim() !== '',
            usersData.adress.value.trim() !== ''
        )
    }

    // BUTTON SUBMISSION HERE

    /* submit validation */
    const onSubmit = React.useCallback(() => {
        // if (!validateAll()) return;
        setStep(3)
    }, [setStep, validateAll])


    // RETURN MAIN

    return (
        <div className='container'>
            <Grid align='center'>
                <img src='./assets/logo.png' alt='logo' className='logoStyle' />
                <h1> Sign up </h1>
                <p>Welcome, create your account now and get free online assistance with best doctors of mybesthealth</p>
            </Grid>


            {/* Select input */}
            <div className='Age-taille-poids'>
                <SelectInput
                    label="Motif d'assistance"
                    value={usersData.category.value}
                    error={usersData.category.error}
                    helperText={usersData.category.helperText}
                    placeholder={"Choisissez votre motif d'assistance "}
                    onValueChange={onCategoryChange}
                    options={description}
                />

            </div>

            {/* age , taille, poids inputs */}
            <div className='Age-taille-poids'>
                <div>
                    <TextInput
                        label='Date de naissance'
                        type='date'
                        value={usersData.dateNaissance.value}
                        error={usersData.dateNaissance.error}
                        helperText={usersData.dateNaissance.helperText}
                        onValueChange={onAgeChange}
                    />
                </div>
                <div>
                    <TextInput
                        label='Taille'
                        type='number'
                        value={usersData.taille.value}
                        error={usersData.taille.error}
                        helperText={usersData.taille.helperText}
                        placeholder={'en cm..'}
                        onValueChange={onTailleChange}
                    />
                </div>
                <div>
                    <TextInput
                        label='Poids'
                        type='number'
                        value={usersData.poids.value}
                        error={usersData.poids.error}
                        helperText={usersData.poids.helperText}
                        placeholder={'en Kg..'}
                        onValueChange={onPoidsChange}
                    />
                </div>
            </div>

            {/* Groupe sanguin */}
            <div className='Age-taille-poids'>
                <SelectInput
                    label='Groupe sanguin'
                    value={usersData.GroupeSanguin.value}
                    error={usersData.GroupeSanguin.error}
                    helperText={usersData.GroupeSanguin.helperText}
                    placeholder={'choisissez votre groupe sanguin'}
                    onValueChange={onGroupeSanguinChange}
                    options={GroupeSanguin}
                />
            </div>

            {/* Nombre de grossesse, nombre d'enfant, nombre de fausse couche */}
            <div className='Age-taille-poids' >
                <div>
                    <TextInput
                        label='Nbre de grossesse'
                        type='number'
                        value={usersData.nbreGross.value}
                        error={usersData.nbreGross.error}
                        helperText={usersData.nbreGross.helperText}
                        placeholder={'Exemple 3'}
                        onValueChange={onNbreGrossChange}
                    />
                </div>
                <div>
                    <TextInput
                        label="Nbre d'enfant"
                        type='number'
                        value={usersData.nbreEnfant.value}
                        error={usersData.nbreEnfant.error}
                        helperText={usersData.nbreEnfant.helperText}
                        placeholder={'Exemple 2'}
                        onValueChange={onNbreEnfantChange}
                    />
                </div>
                <div>
                    <TextInput
                        label='Nbre de fausse couche'
                        type='number'
                        value={usersData.nbreFausseCouche.value}
                        error={usersData.nbreFausseCouche.error}
                        helperText={usersData.nbreFausseCouche.helperText}
                        placeholder={'Exemple 1'}
                        onValueChange={onNbreFausseCoucheChange}
                    />
                </div>
            </div>


            <div className='Age-taille-poids' >
                <TextInput
                    label='Adresse'
                    type='text'
                    value={usersData.adress.value}
                    error={usersData.adress.error}
                    helperText={usersData.adress.helperText}
                    placeholder={'Lieu de résidence'}
                    onValueChange={onAdressChange}
                />

            </div>
            <div className='button' >
                
                <Button
                    variant="contained"
                    type='submit'
                    className='buttonStyle1'
                    color='secondary'
                    onClick={() => setStep(1)}
                >
                    BACK
                </Button>
                <Button
                    variant="contained"
                    type='submit'
                    className='buttonStyle1'
                    onClick={onSubmit}
                >
                    NEXT
                </Button>
            </div>
        </div>
    )
}

export default StepTwoSignUp