import styled from 'styled-components'

import { colors } from '../../styles'
import trash from '../../assets/images/lixeira.svg'
import { Button } from '../Dishe/styles'

type Props = {
  open: boolean
}

type InputGroupProps = {
  display?: string
  maxWidth?: string
}

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: none;
  flex-direction: row-reverse;
  z-index: 1;

  &.open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
export const Aside = styled.aside<Props>`
  display: ${(props) => (props.open === true ? 'block' : 'none')};
  background-color: ${colors.darkPink};
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;
  color: ${colors.pink};
  overflow-y: auto;

  .emptyCart {
    text-align: center;
  }

  form {
    margin-top: 16px;

    > div {
      margin-bottom: 24px;
    }

    ${Button} {
      margin-bottom: 8px;
    }
  }
`
export const CartItem = styled.div`
  padding: 8px;
  background-color: ${colors.pink};
  display: flex;
  color: ${colors.darkPink};
  position: relative;
  margin-bottom: 16px;
  width: 100%;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-right: 14px;
  }

  p {
    font-size: 14px;
  }

  > button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 8px;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const TotalPrice = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 40px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  display: ${(props) => props.display || 'block'};
  justify-content: space-between;
  margin-bottom: 8px;
  flex: auto;

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    background-color: ${colors.pink};
    border: none;
    width: 100%;
    padding: 0 8px;

    &:focus {
      outline: none;
    }

    &.error {
      border: 2px solid #dc0000;
    }
  }
`
export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`

export const P = styled.p`
  line-height: 22px;
  font-size: 14px;
  margin: 16px 0;
`

export const NumberDishe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 14px;
  }

  button {
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;
    color: ${colors.darkPink};
    border: none;
    height: 16px;
    width: 16px;
    cursor: pointer;
  }
`
