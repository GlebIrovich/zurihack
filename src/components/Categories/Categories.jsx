import React from 'react';
import Grid from '@material-ui/core/Grid';
import EmojiCategory from '../EmojiCategory/EmojiCategory';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { appendEmoji } from '../../store/emoji/actions';

const emojis = ['😀', '🥞', '🚴', '🥳'];

const StyledGrid = styled(Grid)`
  padding: 0.5em;
`;

const Categories = () => {
  const dispatch = useDispatch();
  const handleClick = (symbol) => () => dispatch(appendEmoji(symbol));
  return (
    <StyledGrid container>
      {emojis.map((symbol, index) => (
        <Grid item xs={3} key={index}>
          <EmojiCategory symbol={symbol} handleClick={handleClick(symbol)} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default Categories;
