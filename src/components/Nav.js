import React from 'react'

const Nav = () => {
    return (
        <div className='bg-[#000] shadow-md w-full'>
            <header className='shadow-lg'>
                <nav className='flex justify-between items-center w-[90%] h-[20vh] md:h-[10vh] mx-auto'>
                    <div>
                        <h1 className='text-[#fff] hover:text-[#308ECF] text-[30px] font-bold'>Rocket 🚀</h1>
                    </div>
                    <div className='md:static absolute bg-[#000] md:min-h-fit min-h-[50vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
                        <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                            <li>
                                <a className='text-[#fff] hover:text-[#308ECF]' href='/'  rel='noreferrer'>Link1</a>
                            </li>
                            <li>
                                <a className='text-[#fff] hover:text-[#308ECF]' href='/'  rel='noreferrer'>Link2</a>
                            </li>
                            <li>
                                <a className='text-[#fff] hover:text-[#308ECF]' href='/'  rel='noreferrer'>Link3</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='bg-[#fff] text-[#308ECF] px-4 py-2 rounded-full hover:bg-[#308ECF] hover:text-[#fff]'>Subscribe</button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Nav;