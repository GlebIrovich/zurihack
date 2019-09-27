import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { incrementThunk, testGetThunk } from './store/thunkTest/test';

const Test = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(incrementThunk());
    dispatch(testGetThunk());
  }, [dispatch]);
  return <div></div>;
};

Test.propTypes = {
  test: PropTypes.number.isRequired,
};

export default Test;
