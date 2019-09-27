import React from 'react';

import GridLayout from '../components/GridLayout/GridLayout';
import Button from '../components/Button/Button';
import EmojiInput from '../components/EmojiInput/EmojiInput';
import Categories from '../components/Categories/Categories';

const Main = () => {
  return <GridLayout header={<EmojiInput />} body={<Categories />} footer={<Button label="Next" icon="👉" />} />;
};

export default Main;
