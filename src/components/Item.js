import React from 'react';
import styled, { css } from 'styled-components';

import LI from '../atoms/ListItem';
import Container from '../atoms/Container';
import Text from '../atoms/Text';

import { itemTypes } from '../data/constants';

const ListItem = styled(LI)`
  width: calc(100% - 12px);
  padding: 5px;

  justify-content: space-between;
  align-items: center;

  flex-direction: row;

  cursor: pointer;

  &:hover {
    background-color: rgba(222, 223, 224, .1);
  }

  ${props => (Math.abs(props.index % 2) == 1) && css`
    background-color: rgba(0, 0, 0, .17);
  `}
`

const Category = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis; 
  color: rgba(255, 255, 255, .6);
`

const Item = ({ index, id, name, category, weight, value, onClick }) => {
  return (
    <ListItem onClick={onClick} key={id} index={index}>
      <Container flowY='hidden' flowWrap>
        <Text size='0.9em'>{name}</Text>
        <Category size='0.8em'>{itemTypes[category]}</Category>
      </Container>

      <Container direction='row'>
        <Text margin='0 6px'>{weight} lb</Text>
        <Text margin='0 6px'>{value}</Text>
      </Container>
    </ListItem>
  )
}

export default Item;