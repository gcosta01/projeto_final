import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Cart from './components/Cart'
import { store } from './Store'
import Rotas from './route'
import GlobalStyle from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
