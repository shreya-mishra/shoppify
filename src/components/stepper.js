import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, InputGroupAddon, Form, FormGroup, Label, Input, Col, FormText, InputGroup } from 'reactstrap';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Shop preferences', 'Name your shop', 'Stock your shop', 'How you`ll get paid', 'set up billing'];
}


function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return (<div>

                <Container style={{ border: "1px solid black" }} className="App">
                    <h2 style={{
                        textAlign: "center",
                        flex: 1
                    }}>Shop Preference</h2>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <Label for="exampleSelect">Shop Language</Label>
                                <Input type="select" name="select" id="exampleSelect" >
                                    <option>english</option>
                                    <option>hindi</option>
                                    <option>urdu</option>
                                    {/* <option>4</option>
                            <option>5</option> */}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col > <FormGroup>
                            <Label for="exampleSelect">Shop Country</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>India</option>
                                {/* <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option> */}
                            </Input>
                        </FormGroup></Col>
                        <Col> <FormGroup>
                            <Label for="exampleSelect">Shop Currency</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>dollar</option>
                                <option>rupees</option>
                                <option>euro</option>
                                {/* <option>4</option>
                            <option>5</option> */}
                            </Input>
                        </FormGroup></Col>
                        {/* <Button>Submit</Button> */}
                    </Form>
                </Container>

            </div>);
        case 1:
            return (<div><Container style={{ border: "1px solid black" }}><form><Col>
                <FormGroup>
                    <Label>Name Your Shop </Label>
                    <InputGroup>
                        <Input
                            type="shop"
                            name="shopname"
                            id="shopname"
                            placeholder="abc"
                        />        <InputGroupAddon addonType="append"><Button color="primary" >Check Availability</Button></InputGroupAddon>

                    </InputGroup>

                </FormGroup>
            </Col></form></Container></div>);
        case 2:
            return (<div><Container><form><Col>
                <FormGroup style={{
                    textAlign: "center",
                    flex: 1
                }}><h1>Stock your shop</h1><Container style={{ height: "10%" }}></Container><InputGroup ><InputGroupAddon addonType="append"><Link to="/productform"><Button color="grey" variant="contained" style={{
                    position: "absolute",
                    left: "43%",
                    flex: 1,
                    border: " 1px solid black"
                }} >Add product</Button></Link></InputGroupAddon></InputGroup></FormGroup>
            </Col></form></Container></div>);
        case 3:
            return (<div><h1>How you`ll get paid</h1></div>);
        case 4:
            return (<div><h1>set up billing</h1></div>);
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button
                                    style={{ marginLeft: "5%", }}
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
              </Button>
                                <Button style={{ marginLeft: "80%", top: "1em" }} variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Save & Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
