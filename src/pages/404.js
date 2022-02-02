import React, { useState } from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import Empty from '../assets/cursor/empty.svg'
import Filled from '../assets/cursor/filled.svg'
import {start, Start, rainbow, StyledText, Content, ContentGroup, Parent} from '../components/styles.js'

const NotFoundPage = () => {
  const [hover, setHover] = useState(false)

  mouseOver = () => {
    setHover(!hover)
  }

  mouseOut = () => {
    setHover(!hover)
  }

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

export default NotFoundPage
