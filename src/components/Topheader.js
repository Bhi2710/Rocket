import React from 'react'

const Topheader = () => {
  return (
    <header className='bg-[#000] bg-gradient-to-r from-[#000] to-[#04619f] flex flex-wrap justify-between items-center w-[100%] md:px-20 px-10 mx-auto py-8 md:py-48'>
      <aside className='md:w-[40%] w-[100%]'>
       <h1 className='text-[40px] text-[#fff] font-bold'>ROCKET LAB</h1>
       <p className='text-[30px] text-[#fff] py-4'>WE OPEN ACCESS TO SPACE TO IMPROVE LIFE ON EARTH</p>
       <p className='text-[20px] text-[#fff]'>Rocket Lab is an end-to-end space
       company delivering reliable launch
       services, complete spacecraft design
       and manufacturing, satellite components,
       flight software, and more.</p>
      </aside>
      <aside>
        <img src='https://sxcontent9668.azureedge.us/cms-assets/assets/Haven1_Hero_5_2600x1400_a23f540f5f.jpg' alt='Loading' width="550px" height="550px" className='md:py-0 py-10'  />
      </aside>
    </header>
  )
}

export default Topheader