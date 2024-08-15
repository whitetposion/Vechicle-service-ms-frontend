export type Modal = "SERVICE" | "PARTS" | null
export type ModalType = InventoryFormType | ServiceFormType | null

export type InventoryFormType = {
     itemName: string;
     category: string ;
     details: string;
     price: string;
     stock: number;
     date_added: string;
     supplier: string;
}

export type ServiceFormType = {
     serviceName: string;
     category: string ;
     details: string;
     price: string;
}
   