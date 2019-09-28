import React from 'react';

import GridLayout from '../components/GridLayout/GridLayout';
import Button from '../components/Button/Button';
import EmojiInput from '../components/EmojiInput/EmojiInput';
import TimeWidget from '../components/TimeWidget/TimeWidget';

const Main = () => {
  return <GridLayout header={<EmojiInput />} body={<TimeWidget />} footer={<Button label="Next" icon="👉" />} />;
};

export default Main;
