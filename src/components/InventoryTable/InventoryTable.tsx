import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {Inventory} from "@/assets/Data/inventory"

const InventoryTable:React.FC = () => {
     return (
          <div className="h-[90%] relative w-full px-2 scrollbar overflow-auto">
               <Table className="relative w-full overflow-auto">
                    <TableCaption>This is Inventory of Two wheelers</TableCaption>
                    <TableHeader>
                         <TableRow  >
                              <TableHead className="font-bold text-xl">Name</TableHead>
                              <TableHead className="font-bold text-xl">Stock</TableHead>
                              <TableHead className="font-bold text-xl">Category</TableHead>
                              <TableHead className="font-bold text-xl">Price</TableHead>
                              <TableHead className="font-bold text-xl">Supplier</TableHead>
                         </TableRow>
                    </TableHeader>
                    
                    <TableBody>
                         {Inventory.map((item, index)=>{
                              return(
                                   <TableRow key={index} >
                                        <TableCell className="text-lg">{item.name}</TableCell>
                                        <TableCell className="text-lg">{item.quantity}</TableCell>
                                        <TableCell className="text-lg">{item.category}</TableCell>
                                        <TableCell className="text-lg">{item.price}</TableCell>
                                        <TableCell className="text-lg">{item.supplier}</TableCell>
                                   </TableRow>
                              )
                         })
                         }
                    </TableBody>
                    
               </Table>
          </div>
  )
}

export default InventoryTable
