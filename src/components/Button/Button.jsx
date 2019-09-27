import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Margin = styled.span`
  margin-right: 0.8em;
`;

const Button = ({ label, icon }) => {
  return (
    <MaterialButton size="large" variant="outlined" color="default">
      {label}
      {icon && <Margin />}
      {icon}
    </MaterialButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default Button;
