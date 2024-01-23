import styled from 'styled-components'

import backgroundImg from '../../assets/images/bgHeader.svg'
import { colors } from '../../styles'

export const HeaderConteiner = styled.header`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 380px;
  padding-top: 64px;
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  color: ${colors.darkPink};
  max-width: 540px;
  text-align: center;
  margin: 138px auto 0;
`
