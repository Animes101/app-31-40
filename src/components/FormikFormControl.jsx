import React, { useState } from 'react'

 import { useFormik } from 'formik';

const FormikFormControl = () => {



    const formik = useFormik({
     initialValues: {
      name:'',
       email: '',
       password:'',
     },
     onSubmit: (values,{resetForm})=> {
       console.log(values)

       resetForm({values:''})
     },
   });


  
  return (
    <div>
        <form onClick={formik.handleSubmit} action="">
            <input onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="name" />
            <input onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" />
            <input onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormikFormControl