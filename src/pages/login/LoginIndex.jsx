import React, { useEffect, useState } from 'react'
import Container from '../../components/common/Container'
import { GoChevronRight } from "react-icons/go";
import BreadCrumb from '../../components/common/BreadCrumb';
import Peragraph from '../../components/common/Peragraph';
import Input from '../../components/common/Input';
import PrimaryButton from '../../components/common/PrimaryButton';
import { toast } from 'react-toastify';

const LoginIndex = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate form
  const validateForm = () => {
    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      validationErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    return validationErrors;
  };

  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) { return;}
    console.log("Login Data:", formData);
        toast.success('🦄 Login Successfully!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
       });
  };

  const titleStyle = "text-[39px] text-black_2 font-bold";


  return (
     <Container>
        <div className='py-34'>
            <div className=' pb-15.5'>
                <BreadCrumb pageLabel="Login" rootPage="Home "/>
                <Peragraph className="pt-32 max-w-161 font-dmsans" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
            </div>
            <div className='border-y border-y-gray_4 py-15'>
                <h3 className={titleStyle}>Returning Customer</h3>
                            
                <form onSubmit={handleLogin} className="mt-10 max-w-273.75">
                    <div className="grid grid-cols-2 gap-x-10">
                        <div className="flex flex-col">
                          <label className="font-bold text-base leading-6 text-black_2">Email address</label>
                          <Input onChange={handleFormChange} value={formData.email} type="email" placeholder="Enter your email" name="email" className="..." />
                        {errors.email && (
                         <span className="text-red-600 text-sm">{errors.email}</span>
                        )}
                        </div>
                        <div className="flex flex-col">
                          <label className="font-bold text-base leading-6 text-black_2">Password</label>
                          <Input onChange={handleFormChange} value={formData.password} type="password" placeholder="Enter your password" name="password" className="..." />
                        {errors.password && (
                            <span className="text-red-600 text-sm">{errors.password}</span>
                        )}
                        </div>
                    </div>
                    <PrimaryButton type="submit" label="Login" className="mt-7.5" />
                    </form>
                </div>
                <div className="pt-15">
                                    <h3 className='text-[39px]  text-black_2 font-bold'>New Customer </h3>
                     <Peragraph className="pt-9.5 pb-12.5 max-w-161 font-dmsans" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
                     <PrimaryButton url="/registration" label="Continue" />
                </div>
        </div>
    </Container>
  )
}

export default LoginIndex
