import React from 'react'
import { NavData } from '../../dummyData/NavData'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Image from '../common/Image'
import Container from '../common/Container'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = function() {

  let date = new Date();
  let crrYear = date.getFullYear();

  const icons = [
    { icon: FaFacebookF, url: '#' },
    { icon: FaLinkedinIn, url: '#' },
    { icon: FaInstagram, url: '#' },
  ];


  return (
    <section className="py-13 bg-gray_1">
      <Container>
        <div className="">
          <div className="flex flex-col items-start justify-center gap-15">
            <div className="flex items-start gap-35.75">
              <ul className="flex flex-col items-start gap-2">
                <h4 className="mb-3 text-black1 text-lg font-bold leading-6 uppercase">menu</h4>
                {NavData.map(function(item, index) {
                  return (
                    <li key={index}>
                      <NavLink to={item.url}>
                        {item.label}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
              <ul className="flex flex-col items-start gap-2">
                <h4 className="mb-3 text-black1 text-lg font-bold leading-6 uppercase">shop</h4>
                {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'].map(function(item, index) {
                  return (
                    <li key={index}>
                      <NavLink to="#">
                        {item}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
              <ul className="flex flex-col items-start gap-2">
                <h4 className="mb-3 text-black1 text-lg font-bold leading-6 uppercase">help</h4>
                {['Privacy Policy', 'Terms & Conditions', 'Special E-shop', 'Shipping', 'Secure Payments'].map(function(item, index) {
                  return (
                    <li key={index}>
                      <NavLink to="#">
                        {item}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
              <div className="flex flex-col items-start gap-2">
                <h4 className="mb-3 w-46 text-black1 text-lg font-bold leading-6 uppercase">(052) 611-5711 company@domain.com</h4>
                <p className="text-grey1 hover:text-black1">
                  575 Crescent Ave. Quakertown, PA 18951
                </p>
              </div>
              <Image src={logo} alt="logo" />
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-3">
                 <div className="flex gap-4 items-center">
                {icons.map(function(item, index){
                  let Icon = item.icon;
                  return(
                    <div key={index}>
                      <NavLink to={item.url}>
                        <Icon className="text-xl text-black1 hover:text-blue-600 transition-all duration-300" />
                      </NavLink>
                    </div>
                  )
                })}
              </div>

              </div>

              <div>
                <p className="text-grey1">
                  {crrYear} Orebi Minimal eCommerce Figma Template by Adveits
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer