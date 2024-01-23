import styled from 'styled-components'

import backgroundImg from '../../assets/images/bgHeader.svg'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.div`
  height: 186px;
  background-image: url(${backgroundImg});
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 16px;
    }
  }
`
export const SectionTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.darkPink};

  @media (max-width: ${breakpoints.tablet}) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 95px;
  }
`
export const CartItems = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.darkPink};
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const SmallCartItens = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.darkPink};
  cursor: pointer;
  display: none;

  .icon {
    margin-left: 6px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
