import React, { Component } from 'react'
import Link from 'gatsby-link';
import Brand from './components/Brand/index.js';

import './home.scss';
const fadeDuration = 10

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      brands: 'brands in culture'
    }
  }

  componentDidMount() {
    animateBrands();
  }


  animateBrands() {
    let brands = ['brands like Samsung', 'brands like Rihanna', 'brands like Marriott', 'brands like Nissan', 'brands like Bank of America', 'brands like CVS', 'brands like Intel', 'students at Parsons', 'brands in culture'];

    setInterval(() => {
      let visibleBrand = brands.shift();
      brands.push(visibleBrand);
      this.setState({ brands: visibleBrand});
      console.log('switch');
    }, 1000);
  }

  renderBrands() {
    return (
      <Brand brand={this.state.brands}/>
    )
  }

  render() {
    return (
      <div className='home'>
        <div className='home-section'>
          <h1>Hi! My name is Lauren. I'm a creative strategist with an eye for the future.</h1>
        </div>
        <div className='home-section'>
        I help {this.renderBrands()}
          <h1>find their vision and design ways to make that vision happen.</h1>
        </div>
        <div className='home-section'>
          <h1>How? By being a researcher at heart: someone who's born curious but knows how to turn big patterns into future-forward, actionable ideas.
          </h1>
        </div>
        <div className='home-section'>
          <h1>Feeling <span>curious</span> too? Let’s chat.
          </h1>
        </div>
      </div>
    )
  }
}

export default Home;
