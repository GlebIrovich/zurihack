import React from 'react';
import styled from 'styled-components';
import TimePicker from '../TimePicker/TimePicker';
import { useDispatch, useSelector } from 'react-redux';
import { currentTimeSelector } from '../../store/selectors/time';
import { changeTime } from '../../store/time/actions';
import { formatTime } from '../../helpers/formatTime';

const SelectedTime = styled.span`
  position: absolute;
  font-size: 2em;
  color: azure;
`;

const TimeWidget = () => {
  const time = useSelector(currentTimeSelector);
  const { days, hours, minutes } = formatTime(time);
  const dispatch = useDispatch();
  const handleTimeChange = (value) => dispatch(changeTime(value));

  return (
    <React.Fragment>
      <TimePicker handleChange={handleTimeChange} time={time} />
      <SelectedTime>
        {days ? `${days}D ` : ''}
        {hours}H {minutes}M
      </SelectedTime>
    </React.Fragment>
  );
};

export default TimeWidget;
