import React, { useState } from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import PrimaryButton from '../../common/PrimaryButton';
import Input from '../../common/Input';
import { toast, ToastContainer } from 'react-toastify';

const ContactForm = () => {

     const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({
        email: "",
        name: "",
        message: "",
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
        if (!formData.name.trim()) {
          validationErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
          validationErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email.trim())) {
          validationErrors.email = "Please enter a valid email address";
        }
    
        if (!formData.message.trim()) {
          validationErrors.message = "Message is required";
        }
    
        return validationErrors;
      };

    const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) { return;}
    console.log("Contact Data:", formData);
      toast.success('🦄 Successfully submitted!', {
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

  return (
     <div>
       <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />  
      <BreadCrumb pageLabel={`Contact`} rootPage={`Home`}/>
      <h3 className="text-[39px] font-bold mb-4 text-black_2 mt-31.25">Fill up a Form</h3>
      <div className="max-w-195 mt-10.5">
        <form onSubmit={handleLogin} className="max-w-full">
              <div className="grid grid-cols-1 gap-y-6">
                <div className="flex flex-col">
                        <label className="font-bold text-base leading-6 text-black_2">Name</label>
                        <Input onChange={handleFormChange} value={formData.name} type="text" placeholder="Enter your name" name="name" className="py-4 text-base placeholder:text-gray_3 border-b border-b-gray_4 outline-0" />
                        {errors.name && (
                            <span className="text-red-600 text-sm">{errors.name}</span>
                        )}
               </div>
                 <div className="flex flex-col">
                        <label className="font-bold text-base leading-6 text-black_2">Email</label>
                        <Input onChange={handleFormChange} value={formData.email} type="email" placeholder="Enter your email" name="email" className="py-4 text-base placeholder:text-gray_3 border-b border-b-gray_4 outline-0" />
                        {errors.email && (
                            <span className="text-red-600 text-sm">{errors.email}</span>
                        )}
               </div>
               <div className="flex flex-col">
                        <label className="font-bold text-base leading-6 text-black_2">Message</label>
                        <textarea onChange={handleFormChange} value={formData.message} type="text" placeholder="Enter your message" name="message" className="py-4 max-h-25 text-base placeholder:text-gray_3 border-b border-b-gray_4 outline-0" />
                        {errors.message && (
                            <span className="text-red-600 text-sm">{errors.message}</span>
                        )}
                 </div>
              </div>
                    <PrimaryButton type="submit" label="Login" className="mt-7.5" />
          </form>
      </div>
    </div>
  )
} 

export default ContactForm
