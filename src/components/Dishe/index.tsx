import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  add,
  open,
  openItems,
  closeDelivery,
  closePayment
} from '../../Store/Reducers/cart'
import { parseToBrl } from '../../Utils'

import * as S from './styles'

type Props = {
  name: string
  description: string
  img: string
  portion: string
  price: number
  id: number
}

const Dishe = ({ description, name, img, portion, price, id }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    img: '',
    description: '',
    portion: '',
    name: '',
    price: 0,
    id: 0,
    quantity: 0
  })

  const getDescricao = (descricao: string) => {
    if (descricao.length > 173) {
      return descricao.slice(0, 173) + '...'
    }
    return descricao
  }

  const addtoCart = () => {
    dispatch(add(modal))
    dispatch(open())
    dispatch(openItems())
    dispatch(closeDelivery())
    dispatch(closePayment())
    setModal({
      isVisible: false,
      img: '',
      description: '',
      portion: '',
      name: '',
      price: 0,
      id: 0,
      quantity: 0
    })
  }

  return (
    <>
      <S.DisheCard>
        <img
          src={img}
          alt={name}
          onClick={() =>
            setModal({
              isVisible: true,
              description: description,
              img: img,
              portion: portion,
              name: name,
              price: price,
              id: id,
              quantity: 1
            })
          }
        />
        <S.DisheName>{name}</S.DisheName>
        <S.DisheDescription>{getDescricao(description)}</S.DisheDescription>
        <S.Button
          onClick={() =>
            setModal({
              isVisible: true,
              description: description,
              img: img,
              portion: portion,
              name: name,
              price: price,
              id: id,
              quantity: 1
            })
          }
        >
          Adicionar ao carrinho
        </S.Button>
      </S.DisheCard>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContainer className="container">
          <img src={modal.img} alt={name} />
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{portion}</p>
            <S.Button onClick={() => addtoCart()}>
              Adicionar ao carrinho - {parseToBrl(price)}
            </S.Button>
          </div>
        </S.ModalContainer>
        <div
          className="overlay"
          onClick={() =>
            setModal({
              isVisible: false,
              img: '',
              description: '',
              portion: '',
              name: '',
              price: 0,
              id: 0,
              quantity: 0
            })
          }
        ></div>
      </S.Modal>
    </>
  )
}

export default Dishe
