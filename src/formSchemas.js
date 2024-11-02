import * as yup from 'yup';

const vehicleServiceFormSchema = yup.object().shape({
  customerName: yup
    .string()
    .required('Customer Name is required'),
  
  mobile: yup
    .string()
    .matches(/^[0-9]+$/, "Mobile number must contain only digits")
    .min(10, 'Mobile number must be at least 10 digits')
    .max(15, 'Mobile number cannot be more than 15 digits')
    .required('Mobile number is required'),

  address: yup
    .string()
    .optional(), 
  type: yup
    .string()
    .required('Type is required'),

  company: yup
    .string()
    .required('Company is required'),

  model: yup
    .string()
    .optional(), // Optional field

  colour: yup
    .string()
    .optional(), // Optional field

  engineNumber: yup
    .string()
    .optional(), // Optional field

  chassisNumber: yup
    .string()
    .optional(), // Optional field

  numberPlate: yup
    .string()
    .required('Number Plate is required'),

  driven: yup
    .string()
    .optional(), // Optional field

  insuranceCover: yup
    .boolean()
    .required(), // Boolean field

  currentDay: yup
    .string()
    .optional(), // Optional field

  deadlineDay: yup
    .string()
    .optional(), // Optional field
});

export default vehicleServiceFormSchema;
