import { Modal, ModalType } from "@/Types/Modal";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface ModalSliceType {
     modal: Modal
     modalData: ModalType;

}

const initialState:ModalSliceType  = {
     modal: null,
     modalData: null

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