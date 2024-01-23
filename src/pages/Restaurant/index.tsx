import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../Services/api'

import DishesList from '../../components/DishesList'
import HeaderStore from '../../components/HeaderStore'
import Presentation from '../../components/Presentation'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

type restaurantParams = {
  id: string
}

const RestaurantPage = () => {
  const { id } = useParams() as restaurantParams

  const { data: restaurant } = useGetRestaurantQuery(id)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <HeaderStore />
      <Presentation restaurant={restaurant} />
      <DishesList restaurante={restaurant} />
      <Footer />
    </>
  )
}

export default RestaurantPage
