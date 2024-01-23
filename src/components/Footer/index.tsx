import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <S.FooterContainer>
    <img src={logo} alt="Logo Efood" />
    <div>
      <S.SocialMedia src={instagram} alt="Logo instagram" />
      <S.SocialMedia src={facebook} alt="Logo facebook" />
      <S.SocialMedia src={twitter} alt="Logo twitter" />
    </div>
    <S.FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.FooterText>
  </S.FooterContainer>
)
export default Footer
