import React from 'react'
import Container from '../common/Container'
import DashboardSidebar from './DashboardSidebar'
import { Outlet } from 'react-router-dom'
import BreadCrumb from '../common/BreadCrumb'

const DashboardLayout = () => {
  return (
    <section className='py-31'>
      <Container>
        <div className='mb-30'>
          <BreadCrumb pageLabel="My Account" rootPage="Home"/>
        </div>
       <div className='flex gap-10'>
        <DashboardSidebar />
        <div className='flex-1'>
             <Outlet />
        </div>
       </div>
      </Container>
    </section>
  )
}

export default DashboardLayout
