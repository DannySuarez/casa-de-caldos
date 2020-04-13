import React from 'react';
import PropTypes from 'prop-types';

export const ItemModifier = ({ name, isChecked, handleChange }) => {
  const checkIfExtraCost = name => {
    if(name === 'Picadita') return (
      <small>+1.00</small>
    );
  };
  const priceIncrease = checkIfExtraCost(name);

  if(name === 'Mole Con Pollo' || name === 'Tamale') {
    return null;
  }

  return (
    <>
      <legend>
        <span>ADD PROTEIN</span>
        <span>Select Only 1</span>
      </legend>
      <fieldset>
        <div>
          <input
            checked={isChecked.Asada} 
            onChange={handleChange} 
            type="checkbox" 
            id="Asada" 
            value="Asada"
            name="Asada"
          />
          <label htmlFor="Asada">Add Asada {priceIncrease}</label>
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input
            checked={isChecked.AlPastor} 
            onChange={handleChange} 
            type="checkbox" 
            id="AlPastor" 
            value="AlPastor" 
            name="AlPastor"
          />
          <label htmlFor="AlPastor">Add Al Pastor {priceIncrease}</label>
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input
            checked={isChecked.Pollo}
            onChange={handleChange}
            type="checkbox"
            id="Pollo"
            value="Pollo"
            name="Pollo"
          />
          <label htmlFor="Pollo">Add Pollo {priceIncrease}</label>
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input
            checked={isChecked.Lengua}
            onChange={handleChange}
            type="checkbox"
            id="Lengua"
            value="Lengua"
            name="Lengua"
          />
          <label htmlFor="Lengua">Add Lengua {priceIncrease}</label>
        </div>
      </fieldset>
    </>
  );
};

ItemModifier.propTypes = {
  isChecked: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
