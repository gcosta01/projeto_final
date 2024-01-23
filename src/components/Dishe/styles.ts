import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const DisheCard = styled.div`
  padding: 8px;
  background-color: ${colors.darkPink};
  color: ${colors.pink};
  font-size: 14px;
  height: 100%;
  display: flex;
  flex-direction: column;

  img {
    height: 167px;
    width: 100%;
    cursor: pointer;
    object-fit: cover;
  }
`
export const DisheName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`
export const DisheDescription = styled.p`
  line-height: 22px;
  margin: 8px 0;
`
export const Button = styled.button`
  padding: 4px;
  background-color: ${colors.pink};
  color: ${colors.darkPink};
  font-weight: bold;
  border: none;
  width: 100%;
  cursor: pointer;
  margin-top: auto;
`

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`
export const ModalContainer = styled.div`
  background-color: ${colors.darkPink};
  height: 344px;
  display: flex;
  color: ${colors.lightPink};
  font-size: 14px;
  z-index: 1;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  &.container {
    padding: 32px;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 18px;
    }
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      height: 130px;
      object-fit: cover;
    }
  }

  h2 {
    font-size: 18px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
    }
  }

  p {
    margin: 16px 0;
    line-height: 22px;

    @media (max-width: ${breakpoints.tablet}) {
      line-height: 16px;
      font-size: 12px;
    }
  }

  ${Button} {
    width: 218px;
  }
`
