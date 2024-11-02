import React, { useState } from 'react';

type InventoryFormProps = null;

interface FormData {
  itemName: string;
  category: string ;
  details: string;
  price: string;
  stock: number;
  date_added: string;
  supplier: string;
}

const InventoryForm: React.FC<InventoryFormProps> = () => {
     const [formData, setFormData] = useState<FormData>({
          itemName: '',
          category:'0' ,
          details: '',
          price: '',
          stock: 0,
          date_added: '',
          supplier: ''
     });
     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
     const { name, value } = e.target;
          setFormData({
               ...formData,
               [name]: value
          });
     };

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log(formData);
     };
     
     return (
          <div className='absolute flex items-center justify-center top-0 left-0 h-full w-full bg-slate-400 bg-opacity-80'>
                <div className="relative flex p-4 w-[50%] items-start justify-start bg-white rounded-sm">
                    <form onSubmit={handleSubmit} className="w-full h-fit">
                         <div className='w-full h-fit text-[1.5rem] flex items-center justify-center font-semibold text-background bg-indigo-700 rounded-md'>
                              Editing Inventory
                         </div>
                              {/* Item name */}
                              <div className="flex gap-4 my-4 h-8 w-1/2 justify-start items-center">
                                   <label 
                                        htmlFor="ItemName" 
                                        className="h-full min-w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                                   >
                                        Part Name
                                   </label>
                                   <input 
                                        type="text" 
                                        name="itemName" 
                                        id="itemName" 
                                        required
                                        className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                                        value={formData.itemName} onChange={handleInputChange}
                                   />
                              </div>
                              {/* category */}
                              <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                                   <label 
                                        htmlFor="category" 
                                        className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                                   >
                                        Category
                                   </label>
                                   <select value={formData.category} onChange={handleInputChange} name='category' id='category' required>
                                        <option value="0">Bike</option>
                                        <option value="1">Car</option>
                                        <option value="all">All</option>
                                   </select>
                              </div>
                              {/* Supplier */}
                              <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                                   <label 
                                        htmlFor="supplier" 
                                        className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                                   >
                                        Supplier
                                   </label>
                                   <select value={formData.supplier} onChange={handleInputChange} name='supplier' id='supplier' required>
                                        <option value="0">Bike</option>
                                        <option value="1">Car</option>
                                        <option value="all">All</option>
                                   </select>
                                   
                              </div>
                              {/* Price */}
                              <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                              <label 
                                   htmlFor="type" 
                                   className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                              >
                                   Price
                              </label>
                              <input 
                                   type="text" 
                                   name="price" 
                                   id="price" 
                                   required
                                   className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                                   value={formData.price} onChange={handleInputChange}
                              />
                              </div>
                              {/* Stock */}
                              <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                                   <label 
                                        htmlFor="model" 
                                        className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                                   >
                                        Stock
                                   </label>
                                   <input 
                                        type="number" 
                                        name="stock" 
                                        id="stock" 
                                        required
                                        className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                                        value={formData.stock} onChange={handleInputChange}
                                   />
                              </div>
                              <button
                                   name='saveOrUpdate'
                                   className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 focus:outline-none  ">
                                   {"Save"}
                              </button>
                              <button
                                   name='cancel'
                                   className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-red-400">
                                   {"Cancel"}
                              </button>      
                    </form>

               </div>
          </div>
     );
};

export default InventoryForm;
