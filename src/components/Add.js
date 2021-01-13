import React, {useState, useContext} from 'react';
import {Form, Col, Button, Input, Row} from "reactstrap";

import { StateContext, SetStateContext} from '../providers';

function Add(){
    const state = useContext(StateContext);
    const setState = useContext(SetStateContext);
    const [inputName, setInputName] = useState('');
    const [inputCategory, setInputCategory] = useState('');

    function handleSubmit(){
        const newItem = {name: inputName, category: inputCategory};
        const newItems = [...state.items, newItem];
        setState({...state, items: newItems});
        setInputName('');
        setInputCategory('');
    }
    return(
        <Form onSubmit={e =>{e.preventDefault()
            handleSubmit()
        }} >
            <Row>
                <Col xs="5">
                <Input value={inputName} onChange={e => setInputName(e.target.value)} type="text" placeholder="Enter a Name" />
                </Col>
                <Col xs="5">
                <Input value={inputCategory} onChange={e => setInputCategory(e.target.value)} type="text" placeholder="Enter a Category" />
                </Col>
                <Col xs="2"> <Button onClick={() => handleSubmit()}>Add</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default Add;