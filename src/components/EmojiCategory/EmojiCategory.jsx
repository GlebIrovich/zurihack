import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.span`
  font-size: 4em;
  cursor: pointer;
`;

const EmojiCategory = ({ symbol, handleClick }) => {
  return <Item onClick={handleClick}>{symbol}</Item>;
};

EmojiCategory.propTypes = {
  symbol: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default EmojiCategory;
