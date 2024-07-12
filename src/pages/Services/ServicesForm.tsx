import React, { useEffect, useState } from 'react';

type serviceFormProps = {
     type: "Save" | "Update"
     serviceInfo: FormData | null
}
interface FormData {
  serviceName: string;
  category: string ;
  details: string;
  price: string;
}

const ServiceForm: React.FC<serviceFormProps> = ({
type = "Save",
serviceInfo
}) => {
     const [formData, setFormData] = useState<FormData>({
          serviceName: '',
          category:'0' ,
          details: '',
          price: '',
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
     useEffect(()=>{
          if(serviceInfo) setFormData(serviceInfo)
     },[])
     
  return (
     <div className="flex p-4 items-start justify-start w-full h-full">
          <form onSubmit={handleSubmit} className="w-full">
                    {/* Item name */}
                    <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                         <label 
                              htmlFor="ItemName" 
                              className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                         >
                              Part Name
                         </label>
                         <input 
                              type="text" 
                              name="itemName" 
                              id="itemName" 
                              required
                              className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                              value={formData.serviceName} onChange={handleInputChange}
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
                    <button
                         name='saveOrUpdate'
                         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 focus:outline-none  ">
                         {type}
                    </button>      
          </form>

     </div>
  );
};

export default ServiceForm;
