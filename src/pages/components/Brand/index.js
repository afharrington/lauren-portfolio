import React from 'react';
import styled from 'styled-components';

const Brand = ({ brand }) => (
  <Wrapper>Brands like {brand}.</Wrapper>
);

export default Brand;

const Wrapper = styled.div`
  padding: 0px;
  display: inline-block;
  color: #7aa55b;
  font-family: 'Share', sans-serif;
`;
