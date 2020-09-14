import React from 'react';
import PropTypes from 'prop-types';
import { Section } from './CustomerInfo.styled';

export const FormInput = ({
  label,
  value,
  type,
  id,
  name,
  required,
  onChange,
  disabled,
}) => {

  return (
    <Section>
      <label htmlFor={label}>{required ? <i>*{label}</i> : label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        name={name}
        disabled={disabled}
        required={required}
      />
    </Section>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired,
};
