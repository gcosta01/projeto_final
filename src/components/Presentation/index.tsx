import * as S from './styles'

type Restaurant = {
  tipo: string
  titulo: string
  capa: string
}

type Props = {
  restaurant: Restaurant
}

const Presentation = ({ restaurant }: Props) => {
  return (
    <S.PresentationContainer
      style={{ backgroundImage: `url(${restaurant.capa})` }}
    >
      <div className="container">
        <S.TypeFood>{restaurant.tipo}</S.TypeFood>
        <S.RestaurantName>{restaurant.titulo}</S.RestaurantName>
      </div>
    </S.PresentationContainer>
  )
}

export default Presentation
