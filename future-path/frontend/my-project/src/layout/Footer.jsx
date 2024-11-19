import React from 'react'
import Instagram from '../images/ig1.svg'

const Footer = () => {
    return (
        <div className='bottom-0 left-0 w-full'>
            <div className='bg-sky-900 shadow-3xl rounded-t-3xl text-white mt-80 '>
                <div className='p-10'>
                    <div className='flex justify-center mb-10'>
                        <div className='mx-5'>
                            <h1 className='font-bold text-2xl border-r-2'>FUTUREPATH</h1>
                        </div>
                        <div className='w-[200px] font-light text-sm mx-5'>
                            <h2>Tempat mencari sekolah untuk masa depanmu.</h2>
                        </div>

                    </div>
                    <div className='flex justify-evenly'>
                        <div>
                            <div className='flex justify-center mb-5 font-semibold'>
                                <h2>
                                    Kelompok 7
                                </h2>
                            </div>
                            <div className='text-sm leading-10 '>
                                <h3>
                                    Azmi Al Ghifari Rahman - 23515047111058
                                </h3>
                                <h3>
                                    Elvin Darrels Markho - 235150401111050
                                </h3>
                                <h3>
                                    Favian Igneusa Apta Nayottama - 235150401111043
                                </h3>
                                <h3>
                                    Muhammad Alfi Tsani Ramadhan - 235150401111049
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-center mb-5 font-semibold'>
                                <h2>
                                    Tentang Developer
                                </h2>
                            </div>
                            <div className='text-sm '>
                                <div className='flex align-middle'>
                                    <img src={Instagram} alt="" className='w-10' />
                                    <h3 className='p-2'>
                                        zmi.alghifari
                                    </h3>
                                </div>
                                <div className='flex align-middle'>
                                    <img src={Instagram} alt="" className='w-10' />
                                    <h3 className='p-2'>
                                        elvin_markho
                                    </h3>
                                </div>
                                <div className='flex align-middle'>
                                    <img src={Instagram} alt="" className='w-10' />
                                    <h3 className='p-2'>
                                        fvn_igs
                                    </h3>
                                </div>
                                <div className='flex align-middle'>
                                    <img src={Instagram} alt="" className='w-10' />
                                    <h3 className='p-2'>
                                        alfi_tsan
                                    </h3>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='flex justify-between -mb-10'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
