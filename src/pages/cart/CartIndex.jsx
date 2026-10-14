import React from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb'
import Input from '../../components/common/Input'
import { IoClose } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import PrimaryButton from '../../components/common/PrimaryButton';

const CartIndex = () => {
  return (
    <section className='py-31'>
      <Container>
        <BreadCrumb pageLabel={'Cart'} rootPage={"Home"}/>
        <div>
          {/* table header */}
          <div className='bg-[#F5F5F3] py-8 px-5 mt-31 grid grid-cols-4'>
          <div>
            <h6 className='font-bold text-base text-black_2'>Product</h6>
          </div>
          <div>
            <h6 className='font-bold text-base text-black_2'>Price</h6>
          </div>
          <div>
            <h6 className='font-bold text-base text-black_2'>Quantity</h6>
          </div>
          <div>
            <h6 className='font-bold text-base text-black_2'>Total</h6>
          </div>
          </div>
          {/* table body */}
          <div>
            <div className='border-x border-[#F0F0F0] px-5 py-7.5 grid grid-cols-4 items-center'>
               <div className='flex items-center gap-5'>
                <IoClose className='cursor-pointer text-xl' />
                <div className='size-25 bg-fuchsia-400 overflow-hidden'></div>
                <h5 className='font-bold text-base'>Product Name</h5>
               </div>
               <div className='font-bold text-xl'>
                <span>$44.00</span>
               </div>
               <div className=''>
                <div className='border border-[#F0F0F0] px-5 py-2 inline-flex gap-9'>
                   <button className='cursor-pointer'>
                    <FiMinus />
                   </button>
                   <span>1</span>
                   <button className='cursor-pointer'>
                    <GoPlus />
                   </button>
                </div>
               </div>
               <div className='font-bold text-xl'><span>$44.00</span></div>
            </div>
          </div>
          {/* table footer */}
          <div className='border border-[#F0F0F0] p-5 flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <Input className="border border-[#F0F0F0] outline-0 h-12.5 px-3" placeholder="coupon code"/>
              <button className='text-sm font-bold leading-6.5 cursor-pointer text-black_2'>Applu Coupon</button>
            </div>
            <div>
              <button className='text-sm font-bold leading-6.5 cursor-pointer text-black_2'>Update Cart</button>
            </div>
          </div>
        </div>
        <div className='ml-auto w-161 mt-13'>
          <h5 className='font-bold text-xl text-black_2 text-right'>Cart Totals</h5>
          <div className='border border-[#F0F0F0] mt-6'>
            <div className='grid grid-cols-2 border-b border-[#F0F0F0] '>
              <div className='px-5 py-4 border-r border-[#F0F0F0]'>Subtotal</div>
              <div className='px-5 py-4'>389.99$</div>
            </div>
            <div className='grid grid-cols-2 '>
              <div className='px-5 py-4 border-r border-[#F0F0F0]'>Total</div>
              <div className='px-5 py-4'>389.99$</div>
            </div>
          </div>
          <div className='flex justify-end mt-7.5'>
           <PrimaryButton label="Process To Checkout" className=''/>
          </div>
        </div>
      </Container>
    </section> 
  )
}
 
export default CartIndex
