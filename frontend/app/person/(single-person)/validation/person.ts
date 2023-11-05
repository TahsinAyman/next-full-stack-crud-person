import * as yup from "yup";

const validation = yup.object({
  name: yup.string().required("Name is Required"),
  age: yup
    .number()
    .typeError("Age is Required")
    .required("Age is Required")
    .min(3, "Age must be greater than 3")
    .max(3, "Age must be less than 3"),
});

export default validation;
