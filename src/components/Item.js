import React from 'react';
import {ListGroupItem, Col, Row} from "reactstrap";

function Item({item}){

  return(
      <ListGroupItem>
          <Row>
              <Col>{item.name}</Col>
              <Col>{item.category}</Col>
          </Row>
      </ListGroupItem>
  );
}

export default Item;