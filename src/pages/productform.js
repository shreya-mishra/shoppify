import React from 'react'
import { Container, Form, FormGroup, Label, Input, Col, } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default function productform() {
    return (
        <div>
            <div><br></br> <Link to="/productstore"><Button style={{ paddingLeft: "20em" }} color="primary"> Go Back  </Button></Link>
                <Container className="App">
                    <h2 style={{
                        flex: 1, paddingLeft: "9.5em"
                    }}>Edit Product</h2><br></br>
                    <Form style={{
                        width: "40%", position: "absolute",
                        left: "33%"
                    }} className="form">
                        <Col>
                            <FormGroup>
                                <Label for="Sample Name">Name</Label>
                                <Input
                                    type="shop"
                                    name="shopname"
                                    id="shopname"
                                    placeholder="Sample name"
                                />
                            </FormGroup>
                        </Col>
                        <Col > <FormGroup>
                            <Label for="exampleSelect">Price</Label>
                            <Input
                                type="shop"
                                name="shopname"
                                id="shopname"
                                placeholder="0"
                            />
                        </FormGroup></Col>
                        <Col> <FormGroup>
                            <Label for="exampleSelect">Image</Label>
                            <Input
                                type="shop"
                                name="shopname"
                                id="shopname"
                                placeholder="/images/sample.jpg"
                            />
                            <input type="file" />

                        </FormGroup></Col>
                        <Col> <FormGroup>
                            <Label for="exampleSelect">Brand</Label>
                            <Input
                                type="shop"
                                name="shopname"
                                id="shopname"
                                placeholder="Sample brand"
                            />
                        </FormGroup></Col>
                        <Col> <FormGroup>
                            <Label for="exampleSelect">Count In Stock</Label>
                            <Input
                                type="shop"
                                name="shopname"
                                id="shopname"
                                placeholder="0"
                            />
                        </FormGroup></Col>
                        <Col> <FormGroup>
                            <Label for="exampleSelect">Category</Label>
                            <Input
                                type="shop"
                                name="shopname"
                                id="shopname"
                                placeholder="Sample category"
                            />
                        </FormGroup></Col>
                        <Col> <FormGroup>
                            <Label for="exampleSelect">Description</Label>
                            <Input
                                type="shop"
                                name="shopname"
                                id="shopname"
                                placeholder="Sample description"
                            />
                        </FormGroup></Col>
                        {/* <Button>Submit</Button> */}
                    </Form>
                </Container></div>


        </div>
    )
}
