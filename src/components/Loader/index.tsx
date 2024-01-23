import { DotPulse } from '@uiball/loaders'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <DotPulse size={40} speed={1.3} color="black" />
    </Container>
  )
}

export default Loader
