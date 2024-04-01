import React, {useState} from "react";

interface VehicleServiceFormData {
     engineNumber: string;
     chassisNumber: string;
     currentDay: string;
     deadlineDay: string;
     numberPlate: string;
   }
const AddService :React.FC = () => {
     const [formData, setFormData] = useState<VehicleServiceFormData>({
          engineNumber: '',
          chassisNumber: '',
          currentDay: '',
          deadlineDay: '',
          numberPlate: '',
     });
     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setFormData({
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

               <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                    <label 
                         htmlFor="currentDay" 
                         className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                    >
                         Current Date
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

               <div className="flex gap-4 mb-4 h-8 w-1/2 justify-start items-center">
                    <label 
                         htmlFor="deadlineDay" 
                         className="h-full w-36 flex justify-start items-center text-lg font-medium text-gray-500"
                    >
                         Deadline Date
                    </label>
                    <input 
                         type="date" 
                         name="deadlineDay" 
                         id="deadlineDay" 
                         className="h-3/4 focus:outline-none ring-1 focus:ring-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-sm"
                         value={formData.deadlineDay} onChange={handleInputChange}
                    />
               </div>

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
          </form>
    </div>
  )
}

export default AddService
