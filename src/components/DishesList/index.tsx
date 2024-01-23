import Dishe from '../Dishe'
import * as S from './styles'

type Props = {
  restaurante: RestaurantModel
}

const DishesList = ({ restaurante }: Props) => {
  return (
    <S.ContainerList>
      <div className="container">
        <S.List>
          {restaurante.cardapio.map((item) => (
            <li key={item.id}>
              <Dishe
                id={item.id}
                img={item.foto}
                name={item.nome}
                description={item.descricao}
                portion={item.porcao}
                price={item.preco}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.ContainerList>
  )
}

export default DishesList
