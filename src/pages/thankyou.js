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
      <h2>Thanks for getting in touch!</h2>
      <h2>I will return your message as soon as possible.</h2>
      <h2> - Lauren </h2>
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
    color: white;
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
    color: white;
    font-family: 'Share', sans-serif;
  }
`;
