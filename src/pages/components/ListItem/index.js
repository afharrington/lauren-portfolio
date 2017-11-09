import React from 'react';
import styled from 'styled-components';

const ListItem = ({ item }) => (
  <Wrapper>{item}</Wrapper>
);

export default ListItem;

const Wrapper = styled.h2`
  font-family: 'Share', sans-serif;
  margin-bottom: 8px;
`;