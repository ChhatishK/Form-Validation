import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const FormComponents = ({ onSubmit }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: ''
    })

    function changeHandler(e) {

        let {name, value} = e.target;

        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            navigate("/success", { state: formData });
        } else {
            // Handle invalid form submission
            alert('Form submission failed. Please fill in all required fields correctly.')
            console.log('Form submission failed. Please fill in all required fields correctly.');
        }

    };
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        let isValid = true
        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailId = document.getElementById("emailId");
        if (formData.email.trim() !== '' && !emailPattern.test(formData.email)) {
            emailId.style.border = "1px solid red"
            isValid = false;
        } else {
            emailId.style.border = "1px solid green"
        }

        // Validate phone number format
        const phoneNoPattern = /^(0|91)?[6-9][0-9]{9}$/;
        const phoneNumber = document.getElementById("phoneNumber")
        if (formData.phoneNo.trim() !== '' && !phoneNoPattern.test(formData.phoneNo)) {
            phoneNumber.style.border = '1px solid red'
            isValid = false;
        } else {
            phoneNumber.style.border = '1px solid green'
        }

        // Validate Pan Card Number format
        let pan_regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
        const panNumber = document.getElementById("panNumber")
        if (pan_regex.test(formData.panNo) !== true) {
            panNumber.style.border = '1px solid red'
            isValid = false;
        } else {
            panNumber.style.border = '1px solid green'
        }

        // Validate Aadhar Number format
        let aadhar_regex = new RegExp(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/);
        
        const aadharNumber = document.getElementById("aadharNumber")
        if (aadhar_regex.test(formData.aadharNo) !== true) {
            aadharNumber.style.border = '1px solid red'
            isValid = false;
        } else {
            aadharNumber.style.border = '1px solid green'
        }

        setIsFormValid(isValid);
        return isValid;
    };


  return (
    <form className='w-[50%] h-full border flex flex-col items-center'>
        <h2 className='text-3xl'>Sign Up Form</h2>

        <label className='w-[80%]'>
            <p>First Name: <sup className='text-red-500'>*</sup></p>
            <input autoComplete='off' type='text' name='firstName' value={formData.firstName} required onChange={changeHandler} className='w-full  mt-1 appearance-none border-gray-300 border rounded-sm p-1 pl-2' placeholder='Enter First Name...'/>
        </label> 

        <label className='w-[80%]'>
            <p>Last Name: <sup>*</sup></p>
            <input autoComplete='off' type='text' name='lastName' value={formData.lastName} required onChange={changeHandler} className='w-full appearance-none border-gray-300 border rounded-sm p-1 pl-2' placeholder='Enter Last Name...' />
        </label> 

        <label className='w-[80%]'>
            <p>username: <sup>*</sup></p>
            <input autoComplete='off' type='text' name='username' value={formData.username} required onChange={changeHandler} className='w-full appearance-none border-gray-300 border rounded-sm p-1 pl-2' placeholder='Enter username...' />
        </label> 

        <label className='w-[80%]'>
            <p>Email: <sup>*</sup></p>
            <input id='emailId' autoComplete='off' type='email' name='email' value={formData.email} required onChange={changeHandler} className='w-full appearance-none border-gray-300 border rounded-sm p-1 pl-2' placeholder='Enter Email...' />
        </label> 

        <label autoComplete='off' className='w-[80%]'>
            <p>Password: <sup>*</sup></p>
            <input type='password' name='password' value={formData.password} required onChange={changeHandler} className='w-full appearance-none border-gray-300 border rounded-sm p-1 pl-2' placeholder='Enter Password...' />
        </label> 

        <label className='w-[80%]'>
            <p>Phone Number: <sup>*</sup></p>
            <input id='phoneNumber' autoComplete='off' type='text' name='phoneNo' value={formData.phoneNo} required onChange={changeHandler} className='w-full appearance-none border-gray-300 border rounded-sm p-1 pl-2' placeholder='Enter Phone Number...' />
        </label> 

        <label className='w-[80%]'>
            <p>Country: <sup>*</sup></p>
            <input autoComplete='off' type='text' name='country' value={formData.country} required onChange={changeHandler} className='w-full appearance-none border-gray-300 border rounded-sm p-1 pl-2' placeholder='Enter Country Name...' />
        </label> 

        <label className='w-[80%]'>
            <p>City <sup>*</sup></p>
            <input autoComplete='off' type='text' name='city' value={formData.city} required onChange={changeHandler} className='w-full appearance-none border-gray-300 border rounded-sm p-1 pl-2' placeholder='Enter City Name...' />
        </label> 

        <label className='w-[80%]'>
            <p>Pan Number: <sup>*</sup></p>
            <input id='panNumber' autoComplete='off' type='text' name='panNo' value={formData.panNo} required onChange={changeHandler} className='w-full appearance-none border-gray-300 border rounded-sm p-1 pl-2' placeholder='Enter Pan Number...' />
        </label> 

        <label className='w-[80%]'>
            <p>Adhar Number: <sup>*</sup></p>
            <input id='aadharNumber' autoComplete='off' type='text' name='aadharNo' value={formData.aadharNo} required onChange={changeHandler} className=' appearance-none w-full border-gray-300 border rounded-sm p-1 pl-2' placeholder='Enter Adhar Number...' />
        </label> 

        <button onClick={handleSubmit} className='p-2 w-[150px] bg-orange-500 mt-4 rounded-[12px] hover:bg-orange-700 transition-all duration-200'>Submit</button>

    </form>
  )
}

export default FormComponents