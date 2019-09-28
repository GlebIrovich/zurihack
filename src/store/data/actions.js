import { getData } from '../api/data';
import { DATA_ADD } from '../constants';
import { addLocation } from '../location/actions';
import { locationSelector } from '../selectors/location';

const add = (data) => ({
  type: DATA_ADD,
  payload: data,
});

export const addData = () => async (dispatch, getState) => {
  let location = locationSelector(getState());
  if (!location) {
    await dispatch(addLocation());
    location = locationSelector(getState());
  } else {
    dispatch(getData()).then((data) => dispatch(add(data)));
  }
};