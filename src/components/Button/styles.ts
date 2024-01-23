import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled(Link)`
  background-color: ${colors.darkPink};
  color: ${colors.pink};
  padding: 6px 4px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  border: none;
  margin: 16px 8px 8px;
  cursor: pointer;
  text-decoration: none;
`
