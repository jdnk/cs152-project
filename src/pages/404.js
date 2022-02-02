import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import Empty from '../assets/cursor/empty.svg'
import Filled from '../assets/cursor/filled.svg'
import {start, Start, rainbow, StyledText, Content, ContentGroup, Parent} from '../components/styles.js'

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false
    }
  }

  mouseOver = () => {
    this.setState({hover: true})
  }

  mouseOut = () => {
    this.setState({hover: false})
  }

  render() {
    return (
      <div>
        <Start>
          <Content>
            <ContentGroup>
              <p>
                WOW, THIS PAGE <StyledText onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                Doesn't Exist
                </StyledText>.
              </p>
            </ContentGroup>
          </Content>
        </Start>
      </div>
    )
  }
}

export default NotFoundPage
