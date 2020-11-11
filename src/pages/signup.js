import React from 'react'
import { Container, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export default function signup() {
    return (
        <div >

            <Container className="App">
                <h2 style={{
                    flex: 1, paddingLeft: "9.5em"
                }}>Signup</h2><br></br>
                <Form style={{
                    width: "40%", position: "absolute",
                    left: "33%",
                    border: "1px solid black"
                }} className="form" >
                    <Col>
                        <FormGroup>
                            <Label for="Sample Name">Email</Label>
                            <Input
                                type="shop"
                                name="shopname"
                                id="shopname"
                                placeholder="abc@gmail.com"
                            />
                        </FormGroup>
                    </Col>
                    <Col > <FormGroup>
                        <Label for="exampleSelect">Password</Label>
                        <Input
                            type="shop"
                            name="shopname"
                            id="shopname"
                            placeholder=""
                        />
                    </FormGroup></Col>



                    {/* <Button>Submit</Button> */}
                </Form>
            </Container>

        </div>
    )
}
