import React from 'react'
import LeftSideber from '../socialFeeed/LeftSideber'
import ReelSection from './Reel'

function Main() {
  return (
     <>
       <div className='flex xl:gap-[300px] md:gap-[100px] flex-col md:flex-row'>
        <div className='w-md'>
          <LeftSideber/>
       </div>
       <div className='mx-10'>
          <ReelSection/>
       </div>
       </div>
     </>
  )
}

export default Main