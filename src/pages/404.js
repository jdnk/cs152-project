import React, { useState } from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import {start, Start, rainbow, StyledText, Content, ContentGroup, Parent} from '../components/styles.js'

const NotFoundPage = () => {
  const [hover, setHover] = useState(false)

  const mouse = () => {
    setHover(!hover)
  }

  return (
    <div>
      <Start>
        <Content>
          <ContentGroup>
            <p>
              WOW, THIS PAGE <StyledText onMouseOver={this.mouse} onMouseOut={this.mouse}>
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
