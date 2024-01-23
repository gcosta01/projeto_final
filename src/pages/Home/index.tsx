import { useGetRestaurantsQuery } from '../../Services/api'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RestaurantsList from '../../components/RestaurantsList'

const Home = () => {
  const { data: list } = useGetRestaurantsQuery()

  return (
    <>
      <Header />
      {list ? <RestaurantsList restaurants={list} /> : <Loader />}
      <Footer />
    </>
  )
}

export default Home
