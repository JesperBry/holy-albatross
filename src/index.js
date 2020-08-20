import React from 'react';
import styles from './styles.module.css';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: calc(-1 * ${(props) => (props.gap ? props.gap + 'rem' : '1rem')}) 0 0
    calc(-1 * ${(props) => (props.gap ? props.gap + 'rem' : '1rem')});
  width: calc(100% + ${(props) => (props.gap ? props.gap + 'rem' : '1rem')});

  * {
    margin: ${(props) => (props.gap ? props.gap + 'rem' : '1rem')} 0 0
      ${(props) => (props.gap ? props.gap + 'rem' : '1rem')};
  }
`;

const Wrapper = styled.div`
  padding-top: ${(props) =>
    props.paddingTop ? props.paddingTop + 'rem' : 'none'};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom + 'rem' : 'none'};
    
  padding-left: ${(props) => (props.gutter ? '25%' : 'none')};
  padding-right: ${(props) => (props.gutter ? '25%' : 'none')};
  padding-left: ${(props) =>
    props.maxWidth ? props.maxWidth + 'rem' : 'none'};
  padding-right: ${(props) =>
    props.maxWidth ? props.maxWidth + 'rem' : 'none'};
  }
`;

export const Container = (props) => {
  return (
    <Wrapper
      gutter={props.gutter}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      maxWidth={props.maxWidth}
    >
      <StyledContainer gap={props.gap} className={styles.container}>
        {props.children}
      </StyledContainer>
    </Wrapper>
  );
};
