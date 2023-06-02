import React from 'react'

const Mymodel = (props) => {
  return (
    <div className="modal fade py-4" id={`popup${props.items.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title font-bold text-2xl" id="exampleModalLabel">{props.items.rocket_name}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id={`carousel${props.items.id}Controls`} className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={props.items.flickr_images[0]} className="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={props.items.flickr_images[1]} className="d-block w-100" alt="..." />
                </div>
              </div>
              <a className="carousel-control-prev" href={`#carousel${props.items.id}Controls`} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href={`#carousel${props.items.id}Controls`} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            <div className='flex justify-around'>
              <div className='py-3'>
                <p className='font-bold text-md'>Hight</p>
                <p>{props.items.height.feet} Feet</p>
              </div>
              <div className='py-3'>
                <p className='font-bold text-md'>Diameter</p>
                <p>{props.items.diameter.feet} Feet</p>
              </div>
              <div className='py-3'>
                <p className='font-bold text-md'>Mass</p>
                <p>{props.items.mass.kg} Kg</p>
              </div>
            </div>

            <div className='flex justify-around'>
              <div>
                <p className='font-bold text-md'>First Flight</p>
                <p>{props.items.first_flight}</p>
              </div>
              <div>
                <p className='font-bold text-md'>Active</p>
                <p>{props.items.active ? "Yes" : "No"} </p>
              </div>
              <div>
                <p className='font-bold text-md'>Cost/Launch</p>
                <p>$ {props.items.cost_per_launch}</p>
              </div>
            </div>

            <div className='flex justify-center py-4'>
              <a href={props.items.wikipedia} className='text-[#308ECF]' target='_blank' rel='noreferrer'>Read More</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Mymodel