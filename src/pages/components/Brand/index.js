import React from 'react';
import styled from 'styled-components';

const Brand = ({ brand }) => (
  <Wrapper>Brands like {brand}.</Wrapper>
);

export default Brand;

const Wrapper = styled.div`
  padding: 0px;
  display: inline-block;
  color: white;
  font-family: 'Share', sans-serif;
`;
