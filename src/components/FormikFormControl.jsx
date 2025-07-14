import React, { useState } from 'react'

 import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import { string, number} from 'yup';

const FormikFormControl = () => {



    const formik = useFormik({
     initialValues: {
      name:'',
       email: '',
       password:'',
     },
     validationSchema: Yup.object({
      name: Yup.string().min(4).required(),
      email:Yup.string().email(),
      password:Yup.string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters')
    .max(10, 'Password must be at most 10 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,10}$/,
      'Password must contain letters and numbers only'
    ),

}),
     onSubmit: (values,{resetForm})=> {
       console.log(values)

       resetForm({values:''})
     },
   });


  
  return (
    <div>
        <form onClick={formik.handleSubmit} action="">
            <input onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="name" />
            <p>{formik.errors.name}</p>
            <input onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" />
            <p>{formik.errors.email}</p>
            <input onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" />
            <p>{formik.errors.password}</p>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormikFormControl