import React from 'react';

function OrderPage(){
    const FoodType = window.location.href === 'http://localhost:3000/order/pizza' ? 'Pizza': 'Calzone';
    return(
      <div>
        <h1>{FoodType}</h1>

      </div>
    );
  }
  export default OrderPage;