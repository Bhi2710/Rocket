import React from 'react'

const Filter = (props) => {

  return (
    <div className='flex justify-center py-5'>
      <select className='py-2 px-5 font-bold bg-transparent text-[#fff] border-2 rounded-lg' name="height" onChange={props.filters}>
        <option className='text-[#000]' value='0'>Select Height</option>
        <option className='text-[#000]' value="100">More than 100 ft</option>
        <option className='text-[#000]' value="200">More than 200 ft</option>
        <option className='text-[#000]' value="300">More than 300 ft</option>
      </select>
    </div>
  )
}

export default Filter;