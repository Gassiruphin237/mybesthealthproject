import React, { useEffect, useState } from 'react'
import { Field } from 'formik'
import { Grid, TextareaAutosize } from '@mui/material'
import TextInput from '../component/TextInput'
import validator from 'validator'
import '../styles/stepTwo.css'
import SelectInput from '../component/SelectInput'
import axios from 'axios'
import TextArea from '../component/TextArea'


// initialisation des sanguins
const GroupeSanguin = [
    { label: '' , value: ''},
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

                // ALL STATE

    // Element de recuperation des types de maladies dans la base de donnée
    const [description, setDescription] = useState([])
    useEffect(() => {
        try {
            axios.get('http://172.17.4.31:8000/api/category/')
            .then(function (res) {
                console.log(res.data.data)
                setDescription([
                    { label: "" , value: ''},
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
    },[])

    // categories state 
    const [category, setCategory] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    // Birthday state
    const [dateNaissance, setDateNaissance] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    // Taille state
    const [taille, setTaille] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    // Poids state
    const [poids, setPoids] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    // Groupe sanguin state 
    const [groupeSanguin, setGroupeSanguin] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })
    // Nombre de grossesse state 
    const [nbreGross, setNbreGross] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    // Nombre d'enfant'state 
    const [nbreEnfant, setnbreEnfant] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    /* Adresse state */
    const [adress, setsetAdress] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })

    // Nombre de fausse couches state 
    const [nbreFausseCouche, setNbreFausseCouche] = React.useState({
        value: '',
        error: false,
        helperText: 'Require'
    })


                                          // ALL VALLIDATION START HERE

     // Birthday validattion 
     const onAgeChange = React.useCallback((val) => {
        if (validator.isDate(val)) {
            setDateNaissance(state => {
                return {
                    ...state,
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            })
            return
        }

        setDateNaissance(state => ({
                ...state,
                value: val,
                error: true,
            }))

    }, [setDateNaissance, validator])

     // Taille validattion 
     const onTailleChange = React.useCallback((val) => {
        if ((val === '')) {
            setTaille(state => {
                return {
                    ...state,
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            })
            return;
        }
 
            setTaille(state => ({
                ...state,
                value: val,
                error: false,
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
            return
        }
            setPoids(state => ({
                ...state,
                value: val,
                error: true,
            }))

    }, [setPoids, validator])

    // Groupe sanguin validattion 
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

     /* Nombre de grossese validattion */
     const onNbreGrossChange = React.useCallback((val) => {
        if (validator.isInt(val)) {
            setNbreGross(state => {
                return {
                    ...state,
                    value: val,
                    error: false,
                    helperText: 'Require'
                }
            })
            return
        }

        setNbreGross(state => ({
                ...state,
                value: val,
                error: true,
            }))


    }, [setNbreGross, validator])

     // Nombre d'enfant validattion 
     const onNbreEnfantChange = React.useCallback((val) => {
        if (validator.isInt(val)) {
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

     // Nombre de fausse couche validattion 
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

    // Recupreation de l'input type de maladie
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

    // Nombre de fausse couche validattion 
    const onAdressChange = React.useCallback((val) => {
        if (validator.isEmpty(val)) {
            setsetAdress(state => {
                return {
                    ...state,
                    value: val,
                    error: true,
                    helperText: 'Require'
                }
            })
            
        }else {

            setsetAdress(state => ({
                ...state,
                value: val,
                error: false,
            }))

        }
    }, [setsetAdress, validator])


                     // BEFORE VALIDATE ALL THOSE INPUT MUST BE CHECKED HERE


    function validateAll() {
        return (
            category.value.trim() !== '',
            dateNaissance.value.trim() !== '',
            taille.value.trim() !== '',
            poids.value.trim() !== '',
            groupeSanguin.value.trim() !== '',
            nbreGross.value.trim() !== '',
            nbreEnfant.value.trim() !== '',
            nbreFausseCouche.value.trim() !== '',
            nbreFausseCouche.value.trim() !== '',
            adress.value.trim() !== ''
        )
    }


                          // BUTTON SUBMISSION HERE

    /* submit validation */
    const onSubmit = React.useCallback(() => {
        if(!validateAll()){
            return
        } else {
             const data = {
                category: category.value,
                dateNaissance: dateNaissance.value,
                taille: taille.value,
                poids: poids.value,
                groupeSanguin: groupeSanguin.value,
                nbreGross: nbreGross.value,
                nbreEnfant: nbreEnfant.value,
                nbreFausseCouche: nbreFausseCouche.value,
                adress: adress.value,
                
             }
             console.log(data)
            //  alert(JSON.stringify(data))
         }
    }, [dateNaissance, taille, poids, groupeSanguin, nbreGross, nbreEnfant, nbreFausseCouche, adress, category])


                       // RETURN MAIN

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
                    label="Motif d'assistance"
                    value={category.value}
                    error={category.error}
                    helperText={category.helperText}
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
                        value={dateNaissance.value}
                        error={dateNaissance.error}
                        helperText={dateNaissance.helperText}
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
                        placeholder={'en cm..'}
                        onValueChange={(e) => {
                            if(/^[0-9]*$/.test(e)){
                                onTailleChange(e)
                            }
                        }}
                    />
                </div>
                <div>
                    <TextInput
                        label='Poids'
                        type='number'
                        value={poids.value}
                        error={poids.error}
                        helperText={poids.helperText}
                        placeholder={'en Kg..'}
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
                        value={nbreGross.value}
                        error={nbreGross.error}
                        helperText={nbreGross.helperText}
                        placeholder={'Exemple 3'}
                        onValueChange={(e) => {
                            if(/^[0-9]*$/.test(e)){
                                onNbreGrossChange(e)
                            }
                        }}
                    />
                </div>
                <div>
                    <TextInput
                        label="Nbre d'enfant"
                        type='number'
                        value={nbreEnfant.value}
                        error={nbreEnfant.error}
                        helperText={nbreEnfant.helperText}
                        placeholder={'Exemple 2'}
                        onValueChange={(e) => {
                            if(/^[0-9]*$/.test(e)){
                                onNbreEnfantChange(e)
                            }
                        }}
                    />
                </div>
                <div>
                    <TextInput
                        label='Nbre de fausse couche'
                        type='number'
                        value={nbreFausseCouche.value}
                        error={nbreFausseCouche.error}
                        helperText={nbreFausseCouche.helperText}
                        placeholder={'Exemple 1'}
                        onValueChange={(e) => {
                            if(/^[0-9]*$/.test(e)){
                                onNbreFausseCoucheChange(e)
                            }
                        }}
                    />
                </div>
            </div>

            
            <div className='Age-taille-poids' >
            <TextInput
                        label='Adresse'
                        type='text'
                        value={adress.value}
                        error={adress.error}
                        helperText={adress.helperText}
                        placeholder={'Lieu de résidence'}
                        onValueChange={onAdressChange}
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