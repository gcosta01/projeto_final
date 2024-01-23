import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  padding: 40px 0;
  background-color: ${colors.lightPink};
  justify-content: center;
  text-align: center;

  div {
    margin: 32px 0 80px;
  }
`

export const SocialMedia = styled.img`
  margin-right: 8px;
`
export const FooterText = styled.p`
  font-size: 10px;
  color: ${colors.darkPink};
  max-width: 480px;
  text-align: center;
  margin: 0 auto;
`
