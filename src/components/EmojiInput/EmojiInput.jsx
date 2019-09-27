import React from 'react';
import Input from '@material-ui/core/Input';
import { changeEmoji } from '../../store/emoji/actions';
import { emojiSelector } from '../../store/selectors/emoji';
import { useDispatch, useSelector } from 'react-redux';

const EmojiInput = () => {
  const input = useSelector(emojiSelector);
  const dispatch = useDispatch();
  const handleChange = (event) => dispatch(changeEmoji(event.target.value));

  return (
    <Input
      placeholder="your emoji"
      onChange={handleChange}
      value={input}
      inputProps={{
        'aria-label': 'emojis',
      }}
    />
  );
};

export default EmojiInput;
