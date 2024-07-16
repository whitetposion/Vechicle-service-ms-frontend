import { configureStore } from '@reduxjs/toolkit'
import InventoryReducer from './reducers/Inventory'
import ModalReducer from './reducers/Modals'

const store = configureStore({
  reducer: {
    inventory:InventoryReducer,
    modal: ModalReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store