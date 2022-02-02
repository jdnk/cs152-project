import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import Empty from '../assets/cursor/empty.svg'
import Filled from '../assets/cursor/filled.svg'

const start = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Start = styled.div`
  height: 100%;
  background-size: cover;
  opacity: 0;
  animation: ${start} 3s 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-fill-mode: forwards;
`;

const rainbow = keyframes`
  0% {
    color: #ffe0e0;
  }

  10% {
    color: #ffe1ac;
  }

  20% {
    color: #fffaa8;
  }

  30% {
    color: #bffaa8;
  }

  40% {
    color: #bff3e0;
  }

  50% {
    color: #9fe0f8;
  }

  60% {
    color: #9fbaed;
  }

  70% {
    color: #ad99d8;
  }
  80% {
    color: #9f7af8;
  }

  90% {
    color: #c48bf6;
  }

  100% {
    color: #e6b1f6;
  }
`;

const StyledText = styled.span`
  font-family: 'Snell Roundhand', 'Snell Roundhand Script', serif;
  font-weight: bold;
  text-transform: capitalize;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    animation: ${rainbow} 20s infinite alternate;
    animation-fill-mode: forwards;
  }
`;

const Glow = styled.span`
  font-family: 'Snell Roundhand', 'Snell Roundhand Script', serif;
  font-weight: bold;
  text-transform: capitalize;
  animation: ${rainbow} 20s infinite alternate;
  animation-fill-mode: forwards;
`;

const Content = styled.div`
  z-index: 10;
  height: 100%
  background-size: cover;
  background-position: center;
  cursor: url(../assets/cursor/empty.svg), auto;
  position: float;
`;

const ContentGroup = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  font-size: 100px;
  padding: 50px 0px;

  @media (max-width: 1382px) {
    max-width: 80%
  }

  @media (max-width: 1024px) {
    font-size: 80px;
  }

  @media (max-width: 768px) {
    max-width: 90%
    font-size: 60px;
    padding: 15px 0px;
  }
`;

const Parent = styled.div`
  .Img {
    z-index: -1;
    position: absolute;
    max-width: 60%;
    max-height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0%;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .ImgHover {
    opacity: 100%
  }
`;

const Child = styled.div`
  @media (max-width: 1382px) {
    font-size: 80px;
  }

  @media (max-width: 1024px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Sub = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  font-family: 'Helvetica', 'Helvetica Neue', 'Arial', sans-serif;
  color: #ffffff;

  @media (max-width: 1024px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Body = styled.p`
  font-size: 20px;
  font-family: 'Helvetica', 'Helvetica Neue', 'Arial', sans-serif;
  color: #ffffff;
`;

const StyledLink = styled.a`
  text-decoration: underline;

  &:link {
    text-decoration: underline;
  }

  &:visited {
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    text-decoration: underline;
  }
`;

const BodyImage = styled.div`
  text-align: center;
  padding 20px 0;

  img {
    max-width: 80%;
    max-height: 600px;
    padding: 10px 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    @media (max-width: 1382px) {
      max-height: 500px;
    }

    @media (max-width: 1024px) {
      max-height: 400px;
    }

    @media (max-width: 768px) {
      max-height: 300px;
    }
  }
`

export {start, Start, rainbow, StyledText, Content, ContentGroup, Parent, Child, Sub, Body, StyledLink, Glow, BodyImage};