import React from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb'
import Peragraph from '../../components/common/Peragraph'
import PrimaryButton from '../../components/common/PrimaryButton'
import Input from '../../components/common/Input'
import { divisionData } from '../../dummyData/DivisionData'

const Registration = () => {


    const titleStyle = "text-[39px]  text-black_2 font-bold"
  return (
       <Container>
         <div className='py-34'>
            <div className=' pb-15.5'>
                <BreadCrumb pageLabel="Registration" rootPage="Home "/>
                <Peragraph className="pt-32 max-w-161 font-dmsans" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
            </div>
            <div className=' pt-15'>
                <h3 className={titleStyle}>Your Personal Details</h3>          
                    <div className="mt-10 max-w-273.75 grid grid-cols-2 gap-x-10 gap-y-6">
                        <div className="flex flex-col">
                          <label className="font-bold text-base leading-6 text-black_2">First Name</label>
                            <Input  type="text" placeholder="Enter your first name" name="firstName" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0" />
                           {/* {errors.firstName && (
                            <span className="text-red-600 text-sm">{errors.firstName}</span>
                           )} */}
                        </div>
                        <div className="flex flex-col">
                          <label className="font-bold text-base leading-6 text-black_2">Last Name</label>
                            <Input  type="text" placeholder="Enter your last name" name="lastName" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0  " />
                           {/* {errors.lastName && (
                            <span className="text-red-600 text-sm">{errors.lastName}</span>
                           )} */}
                        </div>
                        <div className="flex flex-col">
                          <label className="font-bold text-base leading-6 text-black_2">Email address</label>
                            <Input  type="email" placeholder="Enter your email" name="email" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0  " />
                           {/* {errors.email && (
                            <span className="text-red-600 text-sm">{errors.email}</span>
                           )} */}
                        </div>
                    <div className="flex flex-col">
                        <label className="font-bold text-base leading-6 text-black_2">Telephone</label>
                         <Input type="text" placeholder="Enter your telephone Number" name="telephone" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0  " />
                         {/* {errors.telephone && (
                            <span className="text-red-600 text-sm">{errors.telephone}</span>
                         )} */}
                  </div>
                    </div>
                    <div className="w-full h-px bg-gray_4 mt-17.5 mb-15"></div>
                <div className="">
                     <h3 className='text-[39px]  text-black_2 font-bold'>New Customer </h3>
                <div className="mt-10 max-w-273.75 grid grid-cols-2 gap-x-10 gap-y-6">
                     <div className="flex flex-col">
                          <label className="font-bold text-base leading-6 text-black_2">Address 1</label>
                            <Input  type="text" placeholder="Enter your address 1" name="address1" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0" />
                           {/* {errors.address1 && (
                            <span className="text-red-600 text-sm">{errors.address1}</span>
                           )} */}
                     </div>
                     <div className="flex flex-col">
                          <label className="font-bold text-base leading-6 text-black_2">Address 2</label>
                            <Input  type="text" placeholder="Enter your address 2" name="address2" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0  " />
                           {/* {errors.address2 && (
                            <span className="text-red-600 text-sm">{errors.address2}</span>
                           )} */}
                     </div>
                     <div className="flex flex-col">
                          <label className="font-bold text-base leading-6 text-black_2">City</label>
                            <Input  type="text" placeholder="Enter your city" name="city" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0  " />
                           {/* {errors.city && (
                            <span className="text-red-600 text-sm">{errors.city}</span>
                           )} */}
                      </div>
                      <div className="flex flex-col">
                        <label className="font-bold text-base leading-6 text-black_2">Post Code</label>
                         <Input type="text" placeholder="Enter your post code" name="postCode" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0  " />
                         {/* {errors.postCode && (
                            <span className="text-red-600 text-sm">{errors.postCode}</span>
                         )} */}
                      </div>
                      <div className="flex flex-col">
                        <label className="font-bold text-base leading-6 text-black_2">Division</label>
                        <select name="division" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0">
                            <option value="">Select your division</option>
                            {divisionData.map((division) => (
                                <option key={division.id} value={division.id}>
                                    {division.name}
                                </option>
                            ))}
                        </select>   
                         {/* {errors.division && (
                            <span className="text-red-600 text-sm">{errors.division}</span>
                         )} */}
                      </div>
                      <div className="flex flex-col">
                        <label className="font-bold text-base leading-6 text-black_2">District</label>
                        <select name="district" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0">
                            <option value="">Select your district</option>
                            {divisionData.map((division) => (
                                <option key={division.id} value={division.id}>
                                    {division.name}
                                </option>
                            ))}
                        </select>   
                         {/* {errors.division && (
                            <span className="text-red-600 text-sm">{errors.division}</span>
                         )} */}
                      </div>
                </div>
                     {/* <Peragraph className="pt-9.5 pb-12.5 max-w-161 font-dmsans" text="Lorem Ipsum is simply dummy text of the printing a   typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
                     <PrimaryButton url="/registration" label="Continue" /> */}
                 </div>
                </div>
                <div className="w-full h-px bg-gray_4 mt-17.5 mb-15"></div>
                   <div className="">
                     <h3 className='text-[39px]  text-black_2 font-bold'>Your Password </h3>
                <div className="mt-10 max-w-273.75 grid grid-cols-2 gap-x-10 gap-y-6">
                     <div className="flex flex-col">
                          <label className="font-bold text-base leading-6 text-black_2">Password</label>
                            <Input  type="password" placeholder="Enter your password" name="password" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0" />
                           {/* {errors.password && (
                            <span className="text-red-600 text-sm">{errors.password}</span>
                           )} */}
                     </div>
                     <div className="flex flex-col">
                          <label className="font-bold text-base leading-6 text-black_2">Confirm Password</label>
                            <Input  type="password" placeholder="Confirm your password" name="confirmPassword" className="py-4 text-base text-black placeholder:text-gray_3 border-b border-b-gray_4 outline-0  " />
                           {/* {errors.confirmPassword && (
                            <span className="text-red-600 text-sm">{errors.confirmPassword}</span>
                           )} */}
                     </div>
                         {/* {errors.division && (
                            <span className="text-red-600 text-sm">{errors.division}</span>
                         )} */}
                </div>
                   </div>
                <div className="w-full h-px bg-gray_4 mt-17.5 mb-15"></div>
                <div>
                    <Input type="checkbox" name="agree" id="agree" className="mr-2" />
                    <label for="agree" className="font-bold text-base leading-6 cursor-pointer text-black_2">I have read and agree to the <span className="text-blue_1">Privacy Policy</span></label>
                </div>
                <div className="flex items-center gap-x-8 mt-6">
                    <label for="newsletter" className="font-bold text-base leading-6 cursor-pointer text-black_2">Subscribe to Newsletter</label>
                    <div className="flex items-center gap-x-2 ">
                      <Input type="radio" name="newsletter" id="newsletterYes" className="" />
                        <label for="newsletterYes" className="cursor-pointer text-black_2">yes</label>
                    </div>
                    <div className="flex items-center gap-x-2 ">
                      <Input type="radio" name="newsletter" id="newsletterNo" className="" />
                        <label for="newsletterNo" className="cursor-pointer text-black_2">no</label>
                    </div>
                </div>      
                    <PrimaryButton type="submit" label="Registration" className="mt-7.5" />
         </div>
       </Container>
  )
}

export default Registration
