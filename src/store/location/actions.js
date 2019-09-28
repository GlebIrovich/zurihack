import { getLocation } from '../../helpers/getLocation';
import { LOCATION_ADD } from '../constants';

const add = (location) => ({
  type: LOCATION_ADD,
  payload: location,
});

export const addLocation = () => (dispatch) => {
  getLocation((value) => dispatch(add(value)));
};
