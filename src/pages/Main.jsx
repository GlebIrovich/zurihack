import React from 'react';

import GridLayout from '../components/GridLayout/GridLayout';
import Button from '../components/Button/Button';
import EmojiInput from '../components/EmojiInput/EmojiInput';
import Categories from '../components/Categories/Categories';
import { useSelector } from 'react-redux';
import { emojiSelector } from '../store/selectors/emoji';
import { withRouter } from 'react-router-dom';
import { routes } from '../constants';

const Main = ({ history: { push } }) => {
  const emojiInput = useSelector(emojiSelector);
  const handleClick = () => push(routes.time);
  return (
    <GridLayout
      header={<EmojiInput />}
      body={<Categories />}
      footer={<Button handleClick={handleClick} disabled={!emojiInput} label="Next" icon="👉" />}
    />
  );
};

export default withRouter(Main);
