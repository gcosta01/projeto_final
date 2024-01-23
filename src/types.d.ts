declare type RestaurantModel = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: [
    {
      id: number
      foto: string
      descricao: string
      preco: number
      nome: string
      porcao: string
    }
  ]
}

declare type ModalState = {
  img: string
  isVisible: boolean
  description: string
  portion: string
  name: string
  price: number
  id: number
  quantity: number
}
