import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled(Grid)`
  height: 100vh;
`;

const HEADER_HEIGHT = 10;
const FOOTER_HEIGHT = 15;
const BODY_HEIGHT = 100 - HEADER_HEIGHT - FOOTER_HEIGHT;

const StyledGridSegment = styled(Grid)`
  height: ${({ height }) => height}%;
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

const FooterContainer = styled.div`
  display: flex;
`;

const BodyContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const GridLayout = ({ header, body, footer }) => {
  return (
    <StyledGrid container direction="column" justify="center" alignItems="center">
      <StyledGridSegment item height={HEADER_HEIGHT}>
        <HeaderContainer>{header}</HeaderContainer>
      </StyledGridSegment>
      <StyledGridSegment item height={BODY_HEIGHT}>
        <BodyContainer>{body}</BodyContainer>
      </StyledGridSegment>
      <StyledGridSegment item height={FOOTER_HEIGHT}>
        <FooterContainer>{footer}</FooterContainer>
      </StyledGridSegment>
    </StyledGrid>
  );
};

GridLayout.propTypes = {
  header: PropTypes.element.isRequired,
  body: PropTypes.element.isRequired,
  footer: PropTypes.element.isRequired,
};

export default GridLayout;
