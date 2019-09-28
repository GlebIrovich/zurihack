import { data } from '../../services';
import { emojiSelector } from '../selectors/emoji';
import { currentTimeSelector } from '../selectors/time';

export const getData = () => (_, getState) => {
  const emoji = emojiSelector(getState());
  const time = currentTimeSelector(getState());
  return data(emoji, time);
};
