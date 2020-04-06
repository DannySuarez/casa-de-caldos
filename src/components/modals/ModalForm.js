import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ItemModifier } from './ItemModifier';
import { useStore } from '../../store';
import { addProduct } from '../../actions/productActions';
import { 
  Form,
  ItemModifiers, 
  SpecialInstructions, 
  AddToCartButton 
} from './ModalForm.styled';

export const ModalForm = ({ item }) => {
  const { name, price } = item;

  const [isChecked, setIsChecked] = useState({
    Asada: false,
    AlPastor: false,
    Pollo: false,
    Lengua: false
  });
  const [inputValue, setInputValue] = useState('');

  const [, dispatch] = useStore();  
  
  const checkProteinOptions = proteinObject => {
    const protein = {};
    
    for(let key in proteinObject) {
      const val = proteinObject[key];
      if(val) {
        protein[key] = val;
      }
    }

    const proteins = Object.keys(protein);
    return proteins;
  };

  const SubmitOrder = (e) => {
    e.preventDefault();
    const protein = checkProteinOptions(isChecked);
    const order = {
      protein,
      inputValue,
      name,
      price
    };
    dispatch(addProduct(order));
  };
  
  const handleChange = (e) => {
    const checked = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setIsChecked({
      ...isChecked,
      [e.target.name]: checked
    });

    if(e.target.type === 'textarea') {
      setInputValue(e.target.value);
    }
  };

  return (
    <Form onSubmit={SubmitOrder}>
      <ItemModifiers className="parent">
        <ItemModifier 
          name={name} 
          isChecked={isChecked} 
          handleChange={handleChange} 
        />
        <SpecialInstructions>
          <div>
            <label>Special Requests</label>
            <textarea
              placeholder="e.g. ‘No Rice!’ Please be clear.
              Price adjustments will be added by the restaurant if needed."
              rows="4"
              value={inputValue}
              onChange={handleChange}
            >
            </textarea>
            <AddToCartButton>
              <p>${item.price.toFixed(2)}</p>
              <button>Add To Cart</button>
            </AddToCartButton>
          </div>
        </SpecialInstructions>
      </ItemModifiers>
    </Form>
  );
};

ModalForm.propTypes = {
  item: PropTypes.object.isRequired
};
