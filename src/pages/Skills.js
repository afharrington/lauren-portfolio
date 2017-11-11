import React, { Component } from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';
import ListItem from './components/ListItem';
import 'font-awesome/css/font-awesome.min.css';

class Skills extends Component {

  renderListItems(list) {
    return list.map((item) => {
      return <ListItem key={item} item={item} />
    })
  }

  render() {
    const curious = ['Future technologies', 'Youth culture', 'Digital culture', 'Inclusion and diversity', 'Hospitality innovation', 'Culinary and travel trends', 'Immersive experiences', 'Speculative design', 'Moonshots of all kinds'];
    const skills = ['Brand strategy', 'Design strategy', 'Innovation strategy', 'Workshop design/facilitation', 'Trends analysis', 'Vision planning', 'Teaching design research', 'Doing design research', 'Creative collaboration'];

    return (
      <View>
        <List>
          <ListTitle>Things I'm curious about:</ListTitle>
          {this.renderListItems(curious)}
        </List>
        <List>
          <ListTitle>Skills I specialize in:</ListTitle>
          {this.renderListItems(skills)}
        </List>
      </View>
    )
  }
}

const View = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 200px;
  margin-bottom: 300px;
`;

const List = styled.div`
  text-align: center;
  color: #434343;
  display: inline-block;
  width: 400px;
  margin: 15px;
  margin-left: 30px;

  @media (max-width: 950px) {
    width: 350px;
  }

  @media (max-width: 850px) {
    width: 80%;
    margin-left: 10%;
  }
`;

const ListTitle = styled.h1`
  font-family: 'Share', sans-serif;
  color: #7aa55b;
  font-size: 36px;

  @media (max-width: 950px) {
    font-size: 30px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export default Skills;
