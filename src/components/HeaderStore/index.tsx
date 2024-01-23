import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import { RootReducer } from '../../Store'
import { open } from '../../Store/Reducers/cart'

import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const HeaderStore = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  return (
    <S.HeaderContainer>
      <S.SectionTitle>Restaurantes</S.SectionTitle>
      <Link to={'/'}>
        <img src={logo} alt="Logo Efood" />
      </Link>
      <S.CartItems role="button" onClick={() => dispatch(open())}>
        {items.length} produto(s) no carrinho
      </S.CartItems>
      <S.SmallCartItens role="button" onClick={() => dispatch(open())}>
        {items.length} <FaShoppingCart className="icon" />
      </S.SmallCartItens>
    </S.HeaderContainer>
  )
}
export default HeaderStore
