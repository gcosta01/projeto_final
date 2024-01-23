import { Link } from 'react-router-dom'

import Tag from '../Tag'
import Button from '../Button'

import star from '../../assets/images/estrela.svg'
import { TagContainer } from '../Tag/styles'
import * as S from './styles'

export type Props = {
  name: string
  description: string
  image: string
  highlight: boolean
  typeFood: string
  avaliation: string
  id: number
}

const Restaurant = ({
  name,
  description,
  image,
  highlight,
  typeFood,
  avaliation,
  id
}: Props) => {
  return (
    <>
      <S.Card>
        <S.Infos>
          {highlight ? <TagContainer>Destaque da semana</TagContainer> : ''}
          <Tag>{typeFood}</Tag>
        </S.Infos>
        <Link to={`/restaurante/${id}`}>
          <img src={image} alt={name} className="restaurantImg" />
        </Link>
        <S.PlaceInfo>
          <S.RestaurantName>{name}</S.RestaurantName>
          <div>
            <S.Avaliation>{avaliation}</S.Avaliation>
            <img src={star} alt="Star" />
          </div>
        </S.PlaceInfo>
        <S.Description>{description}</S.Description>
        <div>
          <Button id={id} />
        </div>
      </S.Card>
    </>
  )
}

export default Restaurant
