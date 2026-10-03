import React, { useEffect, useState } from 'react'
import Container from '../../components/common/Container'
import { GoChevronRight } from "react-icons/go";
import BreadCrumb from '../../components/common/BreadCrumb';
import Peragraph from '../../components/common/Peragraph';
import Input from '../../components/common/Input';
import PrimaryButton from '../../components/common/PrimaryButton';

const LoginIndex = () => {
    const [formData, setFormData] = useState({
        email : '', 
        password : ''
    })
    const [errors, setErrors] = useState({
        email : '', 
        password : ''
    })
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const handleformChange = (e)=>{
        const { name, value} = e.target;
        setFormData((prevData) =>({
            ...prevData,
            [name]: value
        }))
        // setErrors({}) 
    }
    const handleLogin = ()=>{
        if(!formData.email){
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Email is required'
            }));
        }else if(!emailRegex.test(formData.email)){
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Please enter a valid email address'
            }));
        }
        else{
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: ''
            }));
        }
        if(!formData.password){
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password is required'
            }));
        }else{
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: ''
            }));
        }
    }
    useEffect(()=>{
     console.log(errors)
    },[errors])


  return (
     <Container>
        <div className='py-34'>
            <div className=' pb-15.5'>
                <BreadCrumb pageLabel="Login" rootPage="Home "/>
                <Peragraph className="pt-32 max-w-[644px] font-dmsans" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
            </div>
            <div className='border-y border-y-gray_4 py-15'>
                <h3 className='text-[39px] text-black_2 font-bold'>Returning Customer</h3>
                <div className='mt-10 max-w-[1055px] grid grid-cols-2'>
                    <div className='flex flex-col'>
                        <label className='font-bold text-base leading-6 text-black_2'>Email address</label>
                        <Input onChange={handleformChange} type="email" placeholder="Enter your email" name="email" className="py-4 text-base text-black placeholder:text-gray_3 border-b-gray_4 outline-none"/>
                        {errors.email &&
                        <span className='text-red-500 text-sm'>{errors.email}</span> 
                        }
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-base leading-6 text-black_2'>Password</label>
                        <Input onChange={handleformChange} type="password" placeholder="Enter your password" name="password" className="py-4 text-base text-black placeholder:text-gray_3 border-b-gray_4 outline-0"/>
                        {errors.password &&
                        <span className='text-red-500 text-sm'>{errors.password}</span>
                        }
                    </div>
                    <PrimaryButton onClick={handleLogin} label="Login" className="mt-7.5"/>
                </div>
            </div>
                <div className='pt-15'>
                     <h3 className='text-[39px]  text-black_2 font-bold'>New Customer </h3>
                     <Peragraph className="pt-9.5 pb-12.5 max-w-[644px] font-dmsans" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
                     <PrimaryButton label="Continue" />
                </div>
        </div>
    </Container>
  )
}

export default LoginIndex
