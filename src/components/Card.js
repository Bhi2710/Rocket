import React from 'react'

const Card = (props) => {
    // console.log(props.items.id)



    return (
        <div className='py-10'>
            <div key={props.items.id} className='md:px-20 px-10 py-4'>
                <div className="max-w-lg rounded overflow-hidden shadow-2xl">
                    <img className="w-full" src={props.items.flickr_images[0]} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="text-[#fff] font-bold text-2xl mb-2">{props.items.rocket_name}</div>
                        <p className='text-[#fff] py-2'>{props.items.country}</p>
                        <p className="text-[#fff] text-base">{props.items.description}</p>
                    </div>
                    <div className="px-6 py-4 pt-4 pb-2">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#popup${props.items.id}`}>
                            View More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card