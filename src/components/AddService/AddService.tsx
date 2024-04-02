import React, {forwardRef, useImperativeHandle, Ref, useState} from "react";

interface VehicleServiceFormData {
     customerName: string;
     mobile: string;
     address: string;
     type: string;
     company: string;
     model: string;
     colour: string;
     engineNumber: string;
     chassisNumber: string;
     driven: string;
     insuranceCover: boolean;
     currentDay: string;
     deadlineDay: string;
     numberPlate: string;
}
interface AddServiceProps {}

export interface AddServiceRef {
  executeFunction: () => void;
}
const AddService : React.ForwardRefRenderFunction<AddServiceRef, AddServiceProps> = (props, ref: Ref<AddServiceRef>)  => {
     
     const executeFunction = () => {
          console.log("conadsjdjdj")
     }
     useImperativeHandle(ref, ()=>({
          executeFunction: executeFunction
     }))
     const [formData, setFormData] = useState<VehicleServiceFormData>({
          customerName: '', // required
          mobile: '', // required
          address: '', 
          type: '',  // required
          company: '', // required
          model: '',
          colour:'',
          engineNumber: '', 
          chassisNumber: '', 
          numberPlate: '', // required
          driven: '',
          insuranceCover: false,
          currentDay: '', 
          deadlineDay: '', 
          
     });
     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          if (name == "insuranceCover") {
               setFormData({
               ...formData,
               [name]: !formData.insuranceCover,
          });
          }
          else setFormData({
            ...formData,
            [name]: value.toUpperCase(),
          });
     };
      
     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          console.log(formData);
          // Here, you would typically send the data to your server or API endpoint.
     };
      
  return (
    <div className="flex items-center justify-start w-full h-full">
          <form onSubmit={handleSubmit} className="w-full">
               <div className="flex ">
                    {/* customer name */}
                    <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                         <label 
                              htmlFor="customerName" 
                              className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                         >
                              Customer Name
                         </label>
                         <input 
                              type="text" 
                              name="customerName" 
                              id="customerName" 
                              required
                              className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                              value={formData.customerName} onChange={handleInputChange}
                         />
                    </div>
                    {/* mobile */}
                    <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                         <label 
                              htmlFor="mobile" 
                              className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                         >
                              Mobile No.
                         </label>
                         <input 
                              type="number" 
                              name="mobile" 
                              id="mobile" 
                              required
                              className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                              value={formData.mobile} onChange={handleInputChange}
                         />
                    </div>
               </div>
               
               <div className="flex">
                    {/* company */}
                    <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                         <label 
                              htmlFor="company" 
                              className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                         >
                              Company
                         </label>
                         <input 
                              type="text" 
                              name="company" 
                              id="company" 
                              required
                              className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                              value={formData.company} onChange={handleInputChange}
                         />
                    </div>
                    {/* Vehicle Type */}
                    <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                    <label 
                         htmlFor="type" 
                         className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                    >
                         Vehicle Type
                    </label>
                    <input 
                         type="text" 
                         name="type" 
                         id="type" 
                         required
                         className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                         value={formData.type} onChange={handleInputChange}
                    />
                    </div>
               </div>
               <div className="flex">
                    {/* model */}
                    <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                         <label 
                              htmlFor="model" 
                              className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                         >
                              Model
                         </label>
                         <input 
                              type="text" 
                              name="model" 
                              id="model" 
                              required
                              className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                              value={formData.model} onChange={handleInputChange}
                         />
                    </div>
                    {/* color */}
                    <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                         <label 
                              htmlFor="colour" 
                              className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                         >
                              Colour
                         </label>
                         <input 
                              type="text" 
                              name="colour" 
                              id="colour" 
                              required
                              className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                              value={formData.colour} onChange={handleInputChange}
                         />
                    </div>
               </div>
               {/* Registration */}
               <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                    <label 
                         htmlFor="numberPlate" 
                         className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                    >
                         Registration No.
                    </label>
                    <input 
                         type="text" 
                         name="numberPlate" 
                         id="numberPlate" 
                         required
                         className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                         value={formData.numberPlate} onChange={handleInputChange}
                    />
               </div>
               <div className="flex">
                    {/* Engine number */}
                    <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                         <label 
                              htmlFor = "engineNumber" 
                              className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                         >
                              Engine Number
                         </label>
                         <input 
                              type="text"
                              name="engineNumber" 
                              id="engineNumber" 
                              required
                              className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                              value={formData.engineNumber} onChange={handleInputChange}
                         />
                    </div>
                    {/* chassis number */}
                    <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                         <label 
                              htmlFor="chassisNumber" 
                              className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                         >
                              Chassis Number
                         </label>
                         <input 
                              type="text" 
                              name="chassisNumber" 
                              id="chassisNumber" 
                              required
                              className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                              value={formData.chassisNumber} onChange={handleInputChange}
                         />
                    </div>
               </div>
               <div className="flex">
                    {/* Driven */}
                    <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                         <label 
                              htmlFor = "driven" 
                              className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                         >
                              Driven kms
                         </label>
                         <input 
                              type="text"
                              name="driven" 
                              id="driven" 
                              required
                              className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                              value={formData.driven} onChange={handleInputChange}
                         />
                    </div>
                    {/* Insurance covered*/}
                    <div className="flex items-center gap-2 mb-4">
                         <input 
                              type="checkbox" 
                              id="insuranceCover" 
                              name="insuranceCover" 
                              checked={formData.insuranceCover} 
                              onChange={handleInputChange}
                              className="h-5 w-5 rounded border-gray-300 focus:ring-indigo-500"
                         />
                         <label 
                              htmlFor="insuranceCover" 
                              className="font-medium text-lg text-gray-500"
                         >
                              Insurance
                         </label>
                    </div>
               </div>
               {/* address */}
               <div className="flex gap-4 mb-4 h-8 w-full justify-start items-center">
                    <label 
                         htmlFor="address" 
                         className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                    >
                         Address
                    </label>
                    <input 
                         type="text" 
                         name="address" 
                         id="address" 
                         className="h-3/4 w-1/2 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                         value={formData.address} onChange={handleInputChange}
                    />
               </div>
               {/* in date */}
               <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                    <label 
                         htmlFor="currentDay" 
                         className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                    >
                         Check-In
                    </label>
                    <input 
                         type="date" 
                         name="currentDay" 
                         id="currentDay" 
                         required
                         className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                         value={formData.currentDay} onChange={handleInputChange}
                    />
               </div>
               {/* delivery date */}
               <div className="flex gap-4  h-8 w-1/2 justify-start items-center">
                    <label 
                         htmlFor="deadlineDay" 
                         className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                    >
                         Delivery Date
                    </label>
                    <input 
                         type="date" 
                         name="deadlineDay" 
                         id="deadlineDay" 
                         className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                         value={formData.deadlineDay} onChange={handleInputChange}
                    />
               </div>
          </form>
    </div>
  )
}

export default forwardRef(AddService);
