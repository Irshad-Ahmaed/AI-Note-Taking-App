import { UserButton } from '@clerk/nextjs';
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-end shadow-sm p-5 rounded-sm'>
        <UserButton />
    </div>
  )
}

export default Header