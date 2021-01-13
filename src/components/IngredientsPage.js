import React from 'react';
import { Row, Col} from 'reactstrap';
import Add from './Add';
import List from './List';
import Item from './Item';

function IngredientsPage(){
  return(
    <div>
      <h1>IngredientsPage</h1>
      <Row><Add/></Row>
      
      <Row>
          <Col></Col>
          <Col xs='auto'><List/></Col>
          <Col></Col>
          
      </Row>

    </div>
  );
}
export default IngredientsPage;