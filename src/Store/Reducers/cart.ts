import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: ModalState[]
  isOpen: boolean
  itemsStage: boolean
  deliveryState: boolean
  paymantState: boolean
  successState: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  itemsStage: false,
  deliveryState: false,
  paymantState: false,
  successState: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ModalState>) => {
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (existingItem !== -1) {
        state.items[existingItem].quantity += 1
      } else {
        state.items.push(action.payload)
      }
    },
    //Cart
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },

    //Items
    openItems: (state) => {
      state.itemsStage = true
    },
    closeItems: (state) => {
      state.itemsStage = false
    },

    // Delivery
    openDelivery: (state) => {
      state.deliveryState = true
    },
    closeDelivery: (state) => {
      state.deliveryState = false
    },

    // Payment
    openPayment: (state) => {
      state.paymantState = true
    },
    closePayment: (state) => {
      state.paymantState = false
    },

    //Success
    openSuccess: (state) => {
      state.successState = true
    },
    closeSuccess: (state) => {
      state.successState = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    },
    subtract: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload
      )

      if (existingItem !== -1) {
        if (state.items[existingItem].quantity > 1) {
          state.items[existingItem].quantity -= 1
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload)
        }
      }
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  clear,
  subtract,
  openItems,
  closeItems,
  openDelivery,
  closeDelivery,
  openPayment,
  closePayment,
  openSuccess,
  closeSuccess
} = cartSlice.actions
export default cartSlice.reducer
