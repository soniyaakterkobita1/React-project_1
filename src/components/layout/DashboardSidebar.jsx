import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const data = [ 
{
    id: 1,
    title: 'Dashboard', 
    url: '/dashboard'
},
{
    id: 2,
    title: 'Profile',
    url: '/profile'
},
{
    id: 3,
    title: 'Downloads',
    url: '/downloads'
},
{
    id: 4,
    title: 'Addresses',
    url: '/addresses'
},
{
    id: 5,
    title: 'Account Details',
    url: '/accountdetails'
},
{
    id: 6,
    title: 'others',
    url: '/others'
},
]

const DashboardSidebar = () => {

    const location = useLocation();

  return (
    <div className='w-58.5'>
      <ul className='flex flex-col gap-1'>
        {data.map((item, index) => (
            <li className='border-b border-b-gray_4 last:border-b-0 py-3' key={index}>
                <NavLink to={item.url} className={`text-base font-semibold ${location.pathname === item.url ? 'text-black_2' : 'text-gray_3  '}`}>
                    {item.title}
                </NavLink>
            </li>
        ))}
        <li className='border-b border-b-gray_4 last:border-b-0 py-3'>
            <button className='text-gray_3 text-base font-normal cursor-pointer'>
                Logout
            </button>
        </li>
      </ul>
    </div>
  )
}

export default DashboardSidebar
