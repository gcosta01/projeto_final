import styled from 'styled-components'
import { colors } from '../../styles'

export const PresentationContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 280px;
  font-size: 32px;
  color: ${colors.white};
  position: relative;

  &::after {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    height: 100%;
  }
`
export const TypeFood = styled.span`
  font-weight: 200;
  position: absolute;
  top: 25px;
`

export const RestaurantName = styled.h2`
  font-size: 32px;
  font-weight: bold;
  position: absolute;
  bottom: 32px;
`
