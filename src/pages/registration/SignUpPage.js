import React, { useState } from 'react';
import StepBar from '../../component/StepBar'
import { Col, Container, Row, Card } from 'react-bootstrap';
import SignUp from '../SignUp';
import StepTwoSignUp from '../StepTwoSignUp';
import {Button} from '@mui/material';



function SignUpPage() {

    const [index, setIndex] = useState(1);
    const [page, setPage] = useState(0);
    const FormTitles = [];

    //debut logique de step bar
    const PrevButton = () => {
        if (index > 1) {
            setIndex(prevIndex => prevIndex - 1);
        }
    }

    const NextButton = () => {
        if (index < 3) {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    //fin logique de step bar

    //logique d'affichage des pages
    const PageDisplay = () => {
        if (page === 0) {
            return <SignUp />
        } else if (page === 1) {
            return <StepTwoSignUp />
        } else {
            return (
                <>
                    <div >
                        <input
                            className="text-success form-check-input"
                            type="checkbox"
                            id="checkboxNoLabel2"
                            value=""
                            aria-label="..."
                        />
                        <label
                            className="form-check-label"
                            for="flexCheckChecked"
                        >
                            Term and condition
                        </label>
                    </div>
                </>
            )
        }
    }


    //logique d'affichage des pages

    //page precedente
    const handlePrev = () => {
        setPage((currPage) => currPage - 1)
    }

    //page suivante
    const handleNext = () => {
        if (page === FormTitles.length - 1) {

        } else {
            setPage((currPage) => currPage + 1)
        }
    }

    return (
        <>
            <Container className="h-100 mt-5">

                <Card className='border-none'>
                    <Row className='h-100 m-3'>
                        <Col className='align-self-center'>
                            <StepBar step={index} />
                        </Col>
                    </Row>
                    <Card.Header>
                        <h1>{FormTitles[page]}</h1>
                    </Card.Header>
                    <Card.Body>
                        {PageDisplay()}
                    </Card.Body>
                    <div className='buttonStyleSignUpPage'>
                        <div className='buttonDivStyle'>
                            <div>
                            {/* <Button
                                variant="contained"
                                type='submit'
                                className='buttonStyle1'
                                // onClick={onSubmit}
                                disabled={page === 0} onClick={() => { PrevButton(); handlePrev() }}
                            >
                                BACK
                            </Button> */}
                            </div>

                            <div onClick={() => { NextButton(); handleNext() }}>
                                {page === FormTitles.length - 1 ? 
                                <Button desabled>Save Account</Button> : 
                                <Button
                                variant="contained"
                                type='submit'
                                className='buttonStyle1'
                                // onClick={onSubmit}
                            >
                                NEXT
                            </Button>}
                            </div>
                        </div>

                        {/* <button
                            disabled={page === 0} onClick={() => { PrevButton(); handlePrev() }} className=' btn btn-primary' >
                            Previous
                        </button>
                        <div
                            onClick={() => { NextButton(); handleNext() }}>
                            {page === FormTitles.length - 1 ? <button desabled className="btn btn-success">Save Account</button> : <button className="btn btn-warning">Next</button>}
                        </div> */}
                    </div>
                </Card>
            </Container>
        </>
    );
}

export default SignUpPage;