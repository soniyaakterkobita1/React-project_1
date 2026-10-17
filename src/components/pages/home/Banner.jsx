import React from 'react'
import bannerImage from '../../../assets/images/banner.jpg'
import Image from '../../common/Image'
import { NavLink } from 'react-router-dom'
import SliderComponent from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderComponent.default || SliderComponent

const data = [
  {
    id:1,
    title:'Banner 1',
    image:bannerImage,
    url:'#'
  },
  {
    id:2,
    title:'Banner 2',
    image:bannerImage,
    url:'#'
  },
  {
    id:3,
    title:'Banner 3',
    image:bannerImage,
    url:'#'
  },
]

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
   <section>
    <div className='bg-[#6D6D6D]/30 h-4'></div>
    <Slider {...settings}>
    {data.map((item,index)=>(
      <NavLink key={index} to="#">
      <Image src={item.image} alt={item.title} className="w-full h-full object-cover"/>
    </NavLink>
    ))}
    </Slider>
   </section>
  )
}


export default Banner
