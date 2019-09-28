import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button/Button';
import EmojiList from '../components/EmojiList/EmojiList';
import GridLayout from '../components/GridLayout/GridLayout';
import Map from '../components/Map/Map';
import SelectedTime from '../components/SelectedTime/SelectedTime';
import { routes } from '../constants';

const StyledSelectedTime = styled(SelectedTime)`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

const StyledProgress = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  margin: 0 auto;
  width: 100%;
  z-index: 100;
  color: #2193b0 !important;
`;

const MapPage = () => {
  const { push } = useHistory();
  const [isLoading, setLoading] = useState(true);
  const handleClickShuffle = () => console.log('Shuffle');
  const handleClickBack = () => push(routes.time);

  return (
    <GridLayout
      header={
        <Container>
          <StyledSelectedTime />
          <EmojiList />
        </Container>
      }
      body={
        <React.Fragment>
          {isLoading && <StyledProgress color="primary" size="6em" />}
          <Map handleLoading={setLoading} />
        </React.Fragment>
      }
      footer={[
        <Button key="back" label="Back" icon="👈" handleClick={handleClickBack} left />,
        <Button key="shuffle" label="Shuffle" icon="🎲" handleClick={handleClickShuffle} />,
      ]}
    />
  );
};

export default MapPage;
