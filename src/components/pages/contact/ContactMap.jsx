import React from 'react'
import map from '../../../assets/images/map.png'
import Image from '../../common/Image'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import { FaMinus } from "react-icons/fa6";


const data = [
  {
    id: 1,
    title: "Germany Office",
    desc: [
      "575 Crescent Ave. Quakertown, PA 18951","+432 533 12 523","info@domain.com","Mon - Fri: 9am - 6pm"]
  },
  {
    id: 2,
    title: "Slovakia Office",
    desc: [
      "575 Crescent Ave. Quakertown, PA 18951","+432 533 12 523","info@domain.com","Mon - Fri: 9am - 6pm"]
  },
  {
    id: 3,
    title: "Lithuania Office",
    desc: [
      "575 Crescent Ave. Quakertown, PA 18951","+432 533 12 523","info@domain.com","Mon - Fri: 9am - 6pm"]
  },
  
]

const ContactMap = () => {

   const [activeIndex, setActiveIndex] = useState();
   const handleIndex = (id) => {
    if(activeIndex === id){
      setActiveIndex("")
    }else{
      setActiveIndex(id)
    } 
    }



  return (
    <div className="h-143 relative">
        <Image src={map} alt="Contact Map" className="w-full h-full object-cover" />
        <div className="absolute left-20 top-1/2 -translate-y-1/2 z-10 w-112.5 bg-white">
           <Accordion allowZeroExpanded>
         {data.map((item) => (
            <AccordionItem key={item.id} className="border-b border-b-gray_4 last:border-b-0 px-5 py-7">
               <AccordionItemHeading onClick={()=>handleIndex(item.id)} className="text-black_2 font-bold text-base">
                   <AccordionItemButton className="flex items-center justify-between ">
                    {item.title}{activeIndex === item.id ? <FaMinus /> : <FaPlus /> }
                   </AccordionItemButton>
              </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="mt-3">
                {item?.desc.map((descItem, desIndex) => (
                  <li key={desIndex}>{descItem}</li>
                ))}
              </ul>
            </AccordionItemPanel>
        </AccordionItem>
        ))}
</Accordion>
        </div>
    </div>
  )
}

export default ContactMap
