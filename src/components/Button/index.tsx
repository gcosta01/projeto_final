import { ButtonContainer } from './styles'

type Props = {
  id: number
}

const Button = ({ id }: Props) => {
  return <ButtonContainer to={`/restaurante/${id}`}>Saiba mais</ButtonContainer>
}

export default Button
