import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Empty from '../assets/cursor/empty.svg'
import Filled from '../assets/cursor/filled.svg'

const Parent = styled.div`
  .HeaderMain {
    z-index: 100;
    background: none;
    position: fixed;
    width: 100%;
    padding: 50px 0;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    @media (max-width: 768px) {
    padding: 15px 0;
    }
  }

  .HeaderScrolled {
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 0;
    backdrop-filter: blur(8px);
  }
`;

const HeaderGroup = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 80% 10% 10%;
  align-items: center;

  @media (max-width: 1382px) {
    max-width: 80%
  }

  @media (max-width: 1024px) {
    grid-template-columns: 75% 12.5% 12.5%;
  }

  @media (max-width: 768px) {
    max-width: 90%
    grid-template-columns: 50% 25% 25%;
  }
`;

const Main = styled(props => <Link { ...props } />)`
  font-size: 20px;
  text-decoration: none;
  justify-self: start;
  cursor: url(../assets/cursor/filled.svg), auto;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const Sub = styled(props => <Link { ...props } />)`
  font-size: 20px;
  text-decoration: none;
  justify-self: end;
  cursor: url(../assets/cursor/filled.svg), auto;  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const screenTop = window.pageYOffset

    if (screenTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <Parent>
        <div className={this.state.hasScrolled ? "HeaderMain HeaderScrolled" : "HeaderMain"}>
          <HeaderGroup>
            <Main to="/"> JADEN KIM </Main>
            <Sub to="/work/"> Work </Sub>
            <Sub to="/contact/"> Contact </Sub>
          </HeaderGroup>
        </div>
      </Parent>
    )
  }
}

export default Header