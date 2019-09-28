import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Margin = styled.span`
  margin-right: 0.8em;
`;

const Button = ({ label, icon, handleClick, disabled }) => {
  return (
    <MaterialButton size="large" variant="outlined" color="default" onClick={handleClick} disabled={disabled}>
      {label}
      {icon && <Margin />}
      {icon}
    </MaterialButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
