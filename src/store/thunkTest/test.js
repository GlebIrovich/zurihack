import { testApi } from '../../services';
import { getLocation } from '../../helpers/getLocation';

const INCREMENT = 'INCREMENT';

const increment = () => ({
  type: INCREMENT,
});

export const incrementThunk = () => (dispatch) => {
  dispatch(increment());
};

export const testGetThunk = () => async (dispatch) => {
  // getLocation();
  // const response = await testApi.data();
  // if (response.ok) {
  //   console.log('Request is successful');
  //   const data = await response.json();
  //   console.log('TCL: testGetThunk -> data', data);
  //   dispatch(increment());
  // }
};
