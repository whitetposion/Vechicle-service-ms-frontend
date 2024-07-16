import { createSlice } from "@reduxjs/toolkit";
import { InventoryItem } from "@/Types/Inventory";
import { PayloadAction } from "@reduxjs/toolkit";

interface InventoryType {
     inventoryItems: InventoryItem[] | null
}

const initialState:InventoryType  = {
     inventoryItems: null,

}
export const inventorySlice = createSlice({
     name : "Inventory",
     initialState,
     reducers: {
          updateAllInventory: (
               state,
               action : PayloadAction<InventoryItem[]>
          ) => {
               state.inventoryItems = action.payload
          },
          
          updateInventoryItem: (
               state,
               action: PayloadAction<InventoryItem>
          ) => {
               const updatedItem = action.payload;
               if (state.inventoryItems) {
                    const oldPartIndex = state.inventoryItems.findIndex(item => item.partId === updatedItem.partId);
                    if (oldPartIndex !== -1) {
                         state.inventoryItems[oldPartIndex] = updatedItem;
                    } else {
                         state.inventoryItems = [...state.inventoryItems, updatedItem];
                    }
               } else {
                    state.inventoryItems = [updatedItem];
               }
          }
     },
})

export const{ updateAllInventory, updateInventoryItem} = inventorySlice.actions

export default inventorySlice.reducer