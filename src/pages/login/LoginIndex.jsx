import React, { useState } from 'react'
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
    const handleformChange = (e)=>{
        const { name, value} = e.target;
        setFormData((prevData) =>({
            ...prevData,
            [name]: value
        }))
    }
    const handleLogin = ()=>{
        console.log(formData)
    }


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
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-base leading-6 text-black_2'>Password</label>
                        <Input onChange={handleformChange} type="password" placeholder="Enter your password" name="password" className="py-4 text-base text-black placeholder:text-gray_3 border-b-gray_4 outline-0"/>
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
