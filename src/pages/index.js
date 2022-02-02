import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import Empty from '../assets/cursor/empty.svg'
import Filled from '../assets/cursor/filled.svg'
import {start, Start, rainbow, StyledText, Content, ContentGroup, Parent} from '../components/styles.js'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false
    }
  }

  mouseOver = (p) => {
    this.setState({[p]: true})
  }

  mouseOut = (p) => {
    this.setState({[p]: false})
  }

  render() {
    return (
      <div>
        <Start>
          <Content>
            <ContentGroup>
              <p>
                <Glow>
                No-Limit Texas Hold 'Em Solver
                </Glow>

                <Sub>
                Jaden Kim
                </Sub>

                <Body>
                I would like to use reinforcement learning to train a model to play No-Limit Texas Hold ‘Em. Ideally, I would like to have a program capable of analyzing a given board and predicting the ideal (or close to ideal) move to beat players in online poker. The program would give probability ranges for ideal moves (i.e. dealt K-A suited pre-flop, the program would suggest with a certain percentage to raise by x amount). The program would also ideally learn more complex strategy, such as c-betting, bluffing, playing ranges, etc. I would like to have the program be able to play at a table with any amount of players, but I am not sure how complicated/feasible that would be.
                </Body>
              </p>
            </ContentGroup>
          </Content>
        </Start>
      </div>
    )
  }
}

export default IndexPage