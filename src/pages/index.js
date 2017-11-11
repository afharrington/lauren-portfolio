import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';
import 'font-awesome/css/font-awesome.min.css';
import Brand from './components/Brand/index.js';
import styled from 'styled-components';
import Skills from './Skills.js';
import Contact from './Contact.js';

const fadeDuration = 10;
let scroll = Scroll.animateScroll;
let Link = Scroll.Link;
let Element = Scroll.Element;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      brands: 'Nissan'
    }
  }

  componentDidMount() {
    this.animateBrands();
  }

  scrollUp() {
    scroll.scrollToTop();
  }

  scrollToSkills() {
    scroller.scrollTo('skillsSection', {
      duration: 1000,
      delay: 100,
      smooth: true
    });
  }

  scrollToContact() {
    scroller.scrollTo('contactSection', {
      duration: 1000,
      delay: 100,
      smooth: true
    });
  }

  animateBrands() {
    let brands = ['Samsung', 'XFINITY', 'Intel', 'CVS', 'Marriott', 'Bank of America', 'IHG', 'Smirnoff', 'Rihanna'];

    setInterval(() => {
      let visibleBrand = brands.shift();
      brands.push(visibleBrand);
      this.setState({ brands: visibleBrand});
    }, 1000);
  }

  renderBrands() {
    return (
      <Brand brand={this.state.brands}/>
    )
  }

  render() {
    const data = this.props.data
    return (
      <div>
        <HeaderContainer>
          <HeaderLink><a href='https://www.instagram.com/lwong10/' target='_blank' rel="noopener noreferrer"><i className="fa fa-instagram"/></a></HeaderLink>
          <HeaderLink><a href='https://www.linkedin.com/in/lwong10/' target='_blank' rel='noopener noreferrer'><i className="fa fa-linkedin"/></a></HeaderLink>
          <HeaderLink><a onClick={this.scrollToContact}><i className="fa fa-envelope"/></a></HeaderLink>
        </HeaderContainer>

        <View>
          <TextBlock>Hi! My name is Lauren.</TextBlock>
          <TextBlock>I'm a creative strategist with an eye for the future. I help brands find their visions and design ways to make them reality. {this.renderBrands()} </TextBlock>
          <TextBlock>At heart, I’m a researcher - someone who was born curious but knows how to turn big patterns into actionable plans. If you’ve got a fascinating problem or a great idea for the future, say <a onClick={this.scrollToContact}>hello</a>.</TextBlock>
        </View>

        <LinkContainer>
          <PageLink>
            <a onClick={this.scrollToSkills}><i className="fa fa-long-arrow-down"/></a>
          </PageLink>
        </LinkContainer>

        <Element name='skillsSection'>
          <Skills/>
        </Element>

        <Element name='contactSection'>
          <Contact/>
        </Element>

      </div>
    )
  }
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 75px;
  margin-top: 10px;
  margin-bottom: 25px;
  text-align: right;
`;

const HeaderLink = styled.div`
  display: inline-block;
  margin-right: 30px;
  line-height: 75px;

  .fa {
    color: #434343;
    cursor: pointer;
  }
`;

const View = styled.div`
  margin-bottom: 50px;
`;

const TextBlock = styled.h1`
  color: #434343;
  line-height: 1.2;
  margin-bottom: 15px;
  font-family: 'Share', sans-serif;

  a {
    color: #7AA55B;
    cursor: pointer;
    transition: all 0.5s ease;
  }

`;

const LinkContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 5px;
`;

const PageLink = styled.p`
  color: #7AA55B;
  font-family: 'Share', sans-serif;
`;


export default Home;
