import React from 'react'
import { Field } from 'formik'
import { Grid, TextareaAutosize } from '@mui/material'
import TextInput from '../component/TextInput'
import validator from 'validator'
import '../styles/stepTwo.css'
import SelectInput from '../component/SelectInput'
import axios from 'axios'
import TextArea from '../component/TextArea'

    /*
        Categories initialisation 
     */
const CATEGORIES = [
    { label: 'Maladie chronique', value: 'maladie-chronique' },
    { label: 'Femme enceinte', value: 'femme-enceinte' },
    { label: 'Autres', value: 'autres' },
]
const GroupeSanguin = [
    { label: 'AB+' , value: 'abPlus'},
    { label: 'AB-' , value: 'abMoins'},
    { label: 'A+' , value: 'aPlus'},
    { label: 'A-' , value: 'aMoins'},
    { label: 'B+' , value: 'bPlus'},
    { label: 'B-' , value: 'bMooins'},
    { label: 'O+' , value: 'oPlus'},
    { label: 'O-' , value: 'oMoins'}
]

function StepTwoSignUp() {

    /* categories state */
    const [category, setCategory] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    /* Age state*/
    const [age, setAge] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    /* Taille state*/
    const [taille, setTaille] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    /* Poids state*/
    const [poids, setPoids] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    /* Groupe sanguin state */
    const [groupeSanguin, setGroupeSanguin] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })
    /* Nombre de grossesse state */
    const [nbreGross, setnbreGross] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    /* Nombre d'enfant'state */
    const [nbreEnfant, setnbreEnfant] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    /* Nombre d'enfant'state */
    const [lieuReside, setLieuReside] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    /* Nombre de fausse couches state */
    const [nbreFausseCouche, setNbreFausseCouche] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })


     /* age validattion */
     const onAgeChange = React.useCallback((val) => {
        if (validator.isDate(val)) {
            setAge(state => {
                return {
                    ...state,
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            })
            return
        }

            setAge(state => ({
                ...state,
                value: val,
                error: true,
            }))

    }, [setAge, validator])

     /* Taille validattion */
     const onTailleChange = React.useCallback((val) => {
        if (validator.isFloat(val)) {
            setTaille(state => {
                return {
                    ...state,
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            })
            return;
        }
 
            setTaille(state => ({
                ...state,
                value: val,
                error: true,
            }))

    }, [setTaille, validator])

     /* Poids validattion */
     const onPoidsChange = React.useCallback((val) => {
        if (validator.isFloat(val)) {
            setPoids(state => {
                return {
                    ...state,
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            })
        }
        else {
            setPoids(state => ({
                ...state,
                value: val,
                error: true,
            }))

        }
    }, [setPoids, validator])

    
     /* Nombre de grossese validattion */
     const onNbreGrossChange = React.useCallback((val) => {
        if (validator.isDecimal(val)) {
            setnbreGross(state => {
                return {
                    ...state,
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            })
            return
        }

            setPoids(state => ({
                ...state,
                value: val,
                error: true,
            }))


    }, [setnbreGross, validator])

     /* Nombre d'enfant validattion */
     const onNbreEnfantChange = React.useCallback((val) => {
        if (validator.isDecimal(val)) {
            setnbreEnfant(state => {
                return {
                    ...state,
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            })
            return
        }

            setnbreEnfant(state => ({
                ...state,
                value: val,
                error: true,
            }))


    }, [setnbreEnfant, validator])

     /* Nombre de fausse couche validattion */
     const onNbreFausseCoucheChange = React.useCallback((val) => {
        if (validator.isDecimal(val)) {
            setNbreFausseCouche(state => {
                return {
                    ...state,
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            })
            return
        }

        setNbreFausseCouche(state => ({
                ...state,
                value: val,
                error: true,
            }))


    }, [setNbreFausseCouche, validator])

     /* Groupe sanguin validattion */
     const onGroupeSanguinChange = React.useCallback((val) => {
        if (val === '') {
            setGroupeSanguin(state => {
                return {
                    ...state,
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            })
            return;
        }

        setGroupeSanguin(state => ({
            ...state,
            value: val,
            error: false,
        }))

    }, [groupeSanguin, validator])

    /*
        medoc state
     */
    const [medoc, setMedoc] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    /* Medoc validattion */
    const onMedocChange = React.useCallback((val) => {
        if (val === '') {
            setMedoc(state => {
                return {
                    ...state,
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            })
            return;
        }

        setMedoc(state => ({
            ...state,
            value: val,
            error: false,
        }))

    }, [setMedoc, validator])

   

    const onCategoryChange = React.useCallback((val) => {
        if (val === '') {
            setCategory(state => {
                return {
                    ...state,
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            })
            return;
        }

        setCategory(state => ({
            ...state,
            value: val,
            error: false,
        }))

    }, [setCategory, validator])

    /* Nombre de fausse couche validattion */
    const onlieuResideChange = React.useCallback((val) => {
        if (validator.isAlphanumeric(val)) {
            setLieuReside(state => {
                return {
                    ...state,
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            })
            
        }else {

        setLieuReside(state => ({
                ...state,
                value: val,
                error: true,
            }))

        }
    }, [setLieuReside, validator])

    function validateAll() {
        return (
            category.value.trim() !== ''
        )
    }


    /* submit validation */
    const onSubmit = React.useCallback(() => {
        if(!validateAll){
            return
        } else {
            const data = {
                category: category.value,
                // age: age.value,
                // taille: taille.value,
                // poids: poids.value,
                // groupeSanguin: groupeSanguin.value,
                // nbreGross: nbreGross.value,
                // nbreEnfant: nbreEnfant.value,
                // nbreFausseCouche: nbreFausseCouche.value,
                // onlieuResideChange: lieuReside.value,
                // medoc: medoc.value,
                
            }
            axios.get('http://172.17.4.31:8000/api/category/', data)
                .then(function (res) {
                    console.log(res.data);
                })
                .catch(function (error) {
                    console.log(error);
                })

            console.log(data)
        }
    }, [/*age, taille, poids, groupeSanguin, nbreGross, nbreEnfant, nbreFausseCouche, lieuReside,*/ category])

    return (
        <div className='container'>
            <Grid align='center'>
                <img src='./assets/logo.png' alt='logo' className='logoStyle' />
                <h1> Sign up </h1>
                <p1>Welcome, create your account now and get free online assistance with best doctors of mybesthealth</p1>
            </Grid>


            {/* Select input */}
            <div className='Age-taille-poids'>
                <SelectInput
                    label='Catégories'
                    value={category.value}
                    error={category.error}
                    helperText={category.helperText}
                    onValueChange={onCategoryChange}
                    options={CATEGORIES}
                />
            </div>

            {/* age , taille, poids inputs */}
            <div className='Age-taille-poids'>
                <div>
                    <TextInput
                        label='Date de naissance'
                        type='date'
                        value={age.value}
                        error={age.error}
                        helperText={age.helperText}
                        placeholder={'age'}
                        onValueChange={onAgeChange}
                    />
                </div>
                <div>
                    <TextInput
                        label='Taille'
                        type='number'
                        value={taille.value}
                        error={taille.error}
                        helperText={taille.helperText}
                        placeholder={'Taille'}
                        onValueChange={onTailleChange}
                    />
                </div>
                <div>
                    <TextInput
                        label='Poids'
                        type='number'
                        value={poids.value}
                        error={poids.error}
                        helperText={poids.helperText}
                        placeholder={'poids'}
                        onValueChange={onPoidsChange}
                    />
                </div>
            </div>

            {/* Groupe sanguin */}
            <div className='Age-taille-poids'>
            <SelectInput
                    label='Groupe sanguin'
                    value={groupeSanguin.value}
                    error={groupeSanguin.error}
                    helperText={groupeSanguin.helperText}
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
                        value={nbreGross.value}
                        error={nbreGross.error}
                        helperText={nbreGross.helperText}
                        placeholder={'nbreGross'}
                        onValueChange={onNbreGrossChange}
                    />
                </div>
                <div>
                    <TextInput
                        label="Nbre d'enfant"
                        type='number'
                        value={nbreEnfant.value}
                        error={nbreEnfant.error}
                        helperText={nbreEnfant.helperText}
                        placeholder={'nbreEnfant'}
                        onValueChange={onNbreEnfantChange}
                    />
                </div>
                <div>
                    <TextInput
                        label='Nbre de fausse couche'
                        type='number'
                        value={nbreFausseCouche.value}
                        error={nbreFausseCouche.error}
                        helperText={nbreFausseCouche.helperText}
                        placeholder={'nbreFausseCouche'}
                        onValueChange={onNbreFausseCoucheChange}
                    />
                </div>
            </div>

            
            <div className='Age-taille-poids' >
            <TextInput
                        label='Lieu de residence'
                        type='text'
                        value={lieuReside.value}
                        error={lieuReside.error}
                        helperText={lieuReside.helperText}
                        placeholder={'Lieu de résidence'}
                        onValueChange={onlieuResideChange}
                    />
                
            </div>
            <div className='button' >
                <button type='button'>BACK</button>
                <button onClick={onSubmit} type='submit'>NEXT</button>
            </div>
        </div>
    )
}

export default StepTwoSignUp