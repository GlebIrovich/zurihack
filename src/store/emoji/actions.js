import { EMOJI_ADD } from '../constants';

const addEmojiInput = (text) => ({
  type: EMOJI_ADD,
  payload: text,
});

export const changeEmoji = (text) => (dispatch) => {
  dispatch(addEmojiInput(text));
}