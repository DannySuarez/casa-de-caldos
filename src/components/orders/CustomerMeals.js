import React from 'react';
import PropTypes from 'prop-types';
import { CustomerMeal } from './CustomerMeal';


export const CustomerMeals = ({ orders }) => {
  const meals = orders.map((meal, i) => {
    return (
      <CustomerMeal key={i} 
        name={meal.name} 
        price={meal.price}
        specialRequest={meal.specialRequest}
        protein={meal.protein}
      />
    );
  });
  
  return (
    <>
      {meals}
    </>
  );
};

CustomerMeals.propTypes = {
  orders: PropTypes.array.isRequired
};
