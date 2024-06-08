import React from 'react'
import { useLocation } from 'react-router-dom'
const SuccessPage = () => {

    const location = useLocation();
    const formData = location.state;
    console.log(formData)
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='p-10 border gap-2 border-gray-300 rounded-sm flex flex-col justify-center items-start shadow-xl'>
            <p>Your Name : {formData.firstName + " " +formData.lastName}</p>
            <p>Username : {formData.username}</p>
            <p>Email : {formData.email}</p>
            <p>Password : {formData.password}</p>

            <p>Phone Number : {formData.phoneNo}</p>
            <p>Country : {formData.country}</p>
            <p>City : {formData.city}</p>
            <p>Pan Number : {formData.panNo}</p>
            <p>Aadhar Number : {formData.aadharNo}</p>
        </div>
    </div>
  )
}

export default SuccessPage