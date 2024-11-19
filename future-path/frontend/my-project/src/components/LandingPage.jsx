import React from 'react';
import { Link } from 'react-router-dom';
import ManWithLamp from '../images/ManWithLamp.svg'
import Listimage from '../images/Listt.svg'
import Faqimage from '../images/FAQs.svg'
import newsimage from '../images/newsimage.svg'



const LandingPage = () => {
    return (
        <div>
            <div className='bg-sky-600 shadow-md shadow-gray-400  rounded-b-3xl z-50 '>
                <div>
                    <div className='flex justify-between bg-sky-600 p-5 sticky top-0 rounded-b-3xl'>
                        <h1 className='text-3xl text-white font-black  hover:overline  hover:transition-transform'>
                            FUTURE
                            <span className='text-white text-shadow-xl'>
                                PATH
                            </span></h1>
                        <div >
                            <Link to="/signup"><button className='mx-5 p-3 rounded-md border font-semibold text-sky-600 bg-white hover:-translate-y-1'>Daftar</button></Link>
                            <Link to="/signin"><button className='p-3 rounded-md border bg-sky-600 font-semibold text-white hover:-translate-y-1'>Masuk</button></Link>
                        </div>
                    </div>

                    <div className='flex justify-between -mb-10'>
                        <div className='mt-96 ml-5 mb-10 font-medium text-lg text-white'>
                            <h1 className>"Bangun masa depan yang lebih cerah dan Rencanakan langkah pendidikanmu</h1>
                            <p>meraih impianmu Bersama FuturePath"</p>
                        </div>
                        <div>
                            <img src={ManWithLamp} alt="ManWithBook" className='h-96  mr-36 ' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20 '>

                <div className='flex justify-center  mt-10'>
                    <h1 className='text-lg p-2 font-semibold'>
                        - Fitur Kami -
                    </h1>
                </div>
                <div>
                    <div className='flex justify-evenly mt-10'>

                        <div className='  border shadow-md p-2 rounded-3xl w-[300px] cursor-pointer hover:scale-110'>
                            <div className='flex justify-center'>
                                <h1 className='text-black font-bold text-lg '>
                                    News
                                </h1>
                            </div>
                            <div className='flex justify-center'>
                                <img src={newsimage} alt="newsimage" className='h-48' />
                            </div>

                            <div className='flex justify-center'>
                                <p className='text-xs pt-2 px-2 text-center'>
                                    fitur ini berfungsi untuk memudahkan user untuk mencari daftar sekolah
                                </p>
                            </div>
                        </div>

                        <div className='border shadow-md p-2 rounded-3xl w-[300px] cursor-pointer hover:scale-110'>
                            <div className='flex justify-center'>
                                <h1 className='font-bold text-lg text-black'>
                                    List
                                </h1>
                            </div>
                            <div className='flex justify-center'>
                                <img src={Listimage} alt="listimage" className='h-48 ' />
                            </div>

                            <div className='flex justify-center'>
                                <p className='text-xs pt-2 px-2 text-center'>
                                    fitur ini berfungsi untuk memudahkan user untuk mencari daftar sekolah

                                </p>
                            </div>
                        </div>

                        <div className='border shadow-md p-2 rounded-3xl w-[300px] cursor-pointer hover:scale-110'>
                            <div className='flex justify-center'>
                                <h1 className='font-bold text-lg text-black'>
                                    FAQ
                                </h1>
                            </div>
                            <div className='flex justify-center'>
                                <img src={Faqimage} alt="faqimage" className='h-48' />
                            </div>

                            <div className='flex justify-center'>
                                <p className='text-xs pt-2 px-2 text-center'>
                                    fitur ini berfungsi untuk memudahkan user untuk mencari daftar sekolah
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;