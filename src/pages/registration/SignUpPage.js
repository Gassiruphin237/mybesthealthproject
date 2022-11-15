import React, { useState } from 'react';
import StepBar from '../../component/StepBar'
import { Col, Container, Row, Card } from 'react-bootstrap';
import SignUp from '../SignUp';
import StepTwoSignUp from '../StepTwoSignUp';



function SignUpPage() {

    const [index, setIndex] = useState(1);
    const [page, setPage] = useState(0);
    const FormTitles = ["Sing up", "Personal info", "All infos"];

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
    const PageDisplay =()=> {
        if(page === 0){
            return <SignUp/>
        }else if(page === 1){
            return <StepTwoSignUp/>
        }else{
            return (
              <>
            <div >
              <input className="text-success form-check-input" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..."/>
              <label className="form-check-label" for="flexCheckChecked">Term and condition</label>
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
                    <Card.Footer className='d-flex justify-content-between'>
                        <button
                            disabled={page === 0} onClick={() => { PrevButton(); handlePrev() }} className=' btn btn-primary' >
                            Previous
                        </button>
                        <div
                            onClick={() => { NextButton(); handleNext() }}>
                            {page === FormTitles.length - 1 ? <button desabled className="btn btn-success">Save Account</button> : <button className="btn btn-warning">Next</button>}
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    );
}

export default SignUpPage;