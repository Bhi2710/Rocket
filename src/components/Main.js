import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddRocket } from '../Redux/RocketReducer';
import Card from './Card';
import Mymodel from './Mymodel';
import Filter from './Filter';

const Main = () => {

  const [height, setHight] = useState(0)
  const dipatch = useDispatch();
  const { allData } = useSelector((state) => state.RocketReducer);


  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((res) => res.json()).
      then((data) => dipatch(AddRocket(data)))
  }, [])

  const handleChange = (e) =>{
    setHight(e.target.value)
  }

  let filteredRocket = allData.filter((data)=>{
    return data.height.feet > height
  })


  return (
    <div>
      <div className='bg-[#000] bg-gradient-to-r from-[#000] to-[#04619f]'>
        <Filter filters = {handleChange}/>
      </div>
      <div className='bg-[#000] bg-gradient-to-r from-[#000] to-[#04619f] justify-center flex flex-wrap'>
        {filteredRocket.map((ele) => {
          return (
            <div>
              <Card items={ele} />
              <Mymodel items={ele} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Main;

