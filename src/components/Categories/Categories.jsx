import React from 'react';
import Grid from '@material-ui/core/Grid';
import EmojiCategory from '../EmojiCategory/EmojiCategory';
import styled from 'styled-components';

const emojis = ['😀', '🥞', '🚴', '🥳'];

const StyledGrid = styled(Grid)`
  padding: 0.5em;
`;

const Categories = () => {
  const handleClick = (symbol) => () => console.log(symbol);
  return (
    <StyledGrid container spacing={3}>
      {emojis.map((symbol, index) => (
        <Grid item xs={3} key={index}>
          <EmojiCategory symbol={symbol} handleClick={handleClick(symbol)} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default Categories;
