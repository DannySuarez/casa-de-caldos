import React from 'react';
import PropTypes from 'prop-types';
import { 
  Form,
  ItemModifiers, 
  SpecialInstructions, 
  AddToCartButton 
} from './ModalForm.styled';

export const ModalForm = ({ item }) => {
  return (
    <Form>
      <ItemModifiers className="parent">
        <legend>
          <span>ADD PROTEIN</span>
          <span>Select 1</span>
        </legend>
        <fieldset>
          <div>
            <input type="checkbox" id="Asada" value="Asada" name="Protein"/>
            <label htmlFor="Asada">Add Asada</label>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <input type="checkbox" id="Al Pastor" value="Al Pastor" name="Protein"/>
            <label htmlFor="Al Pastor">Add Al Pastor</label>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <input type="checkbox" id="Pollo" value="Pollo" name="Protein"/>
            <label htmlFor="Pollo">Add Pollo</label>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <input type="checkbox" id="Lengua" value="Lengua" name="Protein"/>
            <label htmlFor="Lengua">Add Lengua</label>
          </div>
        </fieldset>
        <SpecialInstructions>
          <label>Special Requests</label>
          <textarea
            placeholder="e.g. ‘No Rice!’ Please be clear.
            Price adjustments will be added by the restaurant if needed."
            rows="4"
          >
          </textarea>
          <AddToCartButton>
            <p>${item.price}</p>
            <button>Add To Cart</button>
          </AddToCartButton>
        </SpecialInstructions>
      </ItemModifiers>
    </Form>
  );
};

ModalForm.propTypes = {
  item: PropTypes.object.isRequired
};
