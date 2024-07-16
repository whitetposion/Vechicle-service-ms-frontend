import { Modal } from "@/Types/Modal";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface ModalType {
     modal: Modal
}

const initialState:ModalType  = {
     modal: null,

}
export const modalSlice = createSlice({
     name : "modal",
     initialState,
     reducers: {
          updateModal: (
               state,
               action : PayloadAction<Modal>
          ) => {
               state.modal = action.payload
          },
          closeModal:(state) =>{
               state.modal = null
          }
     },
})

export const{ updateModal, closeModal} = modalSlice.actions

export default modalSlice.reducer