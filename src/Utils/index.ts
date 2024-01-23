export const parseToBrl = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const totalPrice = (items: ModalState[]) => {
  return items.reduce((ac, item) => {
    return (ac += item.price * item.quantity)
  }, 0)
}
