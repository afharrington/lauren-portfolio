import React, { Component } from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const Thankyou = () => (
  <div>
    <HomeLink>
      <Link to="/"><i className="fa fa-long-arrow-left"/>Back</Link>
    </HomeLink>
    <MessageContainer>
      <h2>Thanks for getting in touch! - Lauren</h2>
    </MessageContainer>
  </div>
)

export default Thankyou;

const HomeLink = styled.div`
  margin-top: 100px;
  width: 100%;
  text-align: center;

  .fa {
    font-size: 24px;
    margin-right: 15px;
  }

  a {
    color: #434343;
    font-family: 'Share', sans-serif;
    text-transform: uppercase;
    font-size: 30px;
  }
`;

const MessageContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  text-align: center;

  h2 {
    color: #434343;
    font-family: 'Share', sans-serif;
  }
`;
