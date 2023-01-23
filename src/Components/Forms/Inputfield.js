import React from 'react'
import { ErrorMessage, useField } from 'formik'


const Inputfield = props => {
  const [field, meta] = useField(props)
  return (
    <>
      <input className={`input-field my-4 mx-auto  ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} placeholder={props.placeholder} type={props.type} name={props.name} autoComplete="off" />
      <ErrorMessage component="div" name={field.name} className='error' style={{ marginTop: "-1.6rem" }} />
    </>

  )
}

export default Inputfield