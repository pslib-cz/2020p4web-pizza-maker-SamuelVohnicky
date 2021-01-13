import React, {useContext} from 'react';
import {ListGroup} from "reactstrap";
import Item from './Item';
import {StateContext} from '../providers';

function List(){
    const state = useContext(StateContext);
    const list = state.items;

    function renderList(){
        return list.map ((item, index) => {
            return (
                <Item key={index} item={item}/>
            );
        });
    }

    if(list.length < 1){
        return <h2>List is empty :(</h2>;
    }
    return( 
        <ListGroup>
            {renderList()}
        </ListGroup>
    );
}
export default List;