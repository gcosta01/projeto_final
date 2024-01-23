import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const Header = () => (
  <S.HeaderConteiner>
    <Link to={'/'}>
      <S.Logo src={logo} alt="logo" />
    </Link>
    <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
  </S.HeaderConteiner>
)

export default Header
