import Restaurant from '../Restaurant'

import { List } from './styles'

type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  return (
    <>
      <div className="container">
        <List>
          {restaurants.map((item) => (
            <li key={item.id}>
              <Restaurant
                id={item.id}
                highlight={item.destacado}
                typeFood={item.tipo}
                key={item.id}
                name={item.titulo}
                description={item.descricao}
                image={item.capa}
                avaliation={item.avaliacao}
              />
            </li>
          ))}
        </List>
      </div>
    </>
  )
}

export default RestaurantsList
