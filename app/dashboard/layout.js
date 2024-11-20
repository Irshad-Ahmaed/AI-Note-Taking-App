import React from 'react'
import Sidebar from './_components/Sidebar';
import Header from './_components/Header';

const DashboardLayout = ({children}) => {
  return (
    <>
        <div className='w-64 h-screen fixed'>
            <Sidebar/>
        </div>
        <div className='ml-64 flex flex-col'>
            <Header/>
            <div className='p-10'>
                {children}
            </div>
        </div>
    </>
  )
}

export default DashboardLayout