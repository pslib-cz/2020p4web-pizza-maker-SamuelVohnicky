import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col} from 'reactstrap';

function HomePage(){
  return(
    <div>
      <Row>
          <Col><Link to='/order/pizza'>Pizza</Link></Col>
          <Col><Link to='/order/calzone'>Calzone</Link></Col>
      </Row>
      
      
    </div>
  );
}
export default HomePage;
