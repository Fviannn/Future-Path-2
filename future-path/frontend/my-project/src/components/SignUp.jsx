import React, { useState } from 'react';
import axios from 'axios';
import GoogleLogo from '../assets/Googlelogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { BiHide, BiShowAlt } from "react-icons/bi";
import { register } from '../../../api/services/auth';




const SignUp = () => {
    const navigate = useNavigate();
    const [nama_user, setUsername] = useState('');
    const [email_user, setEmail] = useState('');
    const [password_user, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password_user !== confirmPassword) {
            setError('Password tidak sesuai');
            return;
        } else if (password_user.length < 8) {
            setError('Password minimal 8 karakter');
        } else if (email_user != ['%gmail%']) {
            setError('pastikan email anda menggunakan gmail');

        }

        try {
            await register(nama_user, email_user, password_user);
            navigate('/signin');

        } catch (err) {
            console.error(err);
            if (err.response) {
                if (password_user !== confirmPassword) {
                    setError('Password tidak sesuai');
                } else if (password_user.length < 8) {
                    setError('Password minimal 8 karakter');
                } 
                // else if (email_user != ['%@gmail.com']) {
                //     setError('pastikan email anda menggunakan gmail');
                // }
                // setError('Login failed: ' + (err.response.data.message || 'Unknown error'));
            }
            else {
                setError('Login failed: Network error');
            }
        }
    };
    // navigate('/home');

    // if (response.data.data.token) {
    //     localStorage.setItem('token', response.data.data.token);
    //     console.log("Token saved:", response.data.data.token); // Tambahkan log ini
    // } else {
    //     setError('Login failed: Token not found in response');
    //     return;
    // }
    // if (response.data.data.RoleID) {
    //     localStorage.setItem('Role_ID', response.data.data.RoleID);
    //     console.log("roleId saved:", response.data.data.RoleID); // Tambahkan log ini
    // } else {
    //     setError('Login failed: RoleId not found in response');
    //     return;
    // }
    return (

        <div className="flex max-h-screen">
            <div className='w-8/12 min-h-screen flex flex-col items-center justify-center relative pattern-wavy pattern-blue-500 pattern-bg-sky-700 pattern-size-5 pattern-opacity-100 '>
                <div className='mt-20'>
                    <h1 className="text-white text-6xl font-bold w-[400px]">HALO FUTUREPATH!</h1>
                    <h1 className="text-white font-thin w-[400px] my-10">"Carilah jalanmu, temukan pilihan terbaikmu, dan wujudkan masa depanmu bersama FuturePath!" </h1>
                </div>
                <div className="pb-">
                    <h3 className='text-white mt-40 items-end font-extralight text-sm'>Created by Kelompok 7</h3>
                </div>
            </div>

            <div className='w-1/2  flex flex-col p-28'>
                <h1 className="text-black text-2xl text-center -mt-20  mb-10 font-bold ">FUTUREPATH</h1>
                <div className="bg-white border p-7 rounded-xl shadow-md w-99">
                    <h2 className="text-black text-xl text-center font-medium">Daftar</h2>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-500" htmlFor="nama_user"></label>
                            <input
                                type="text"
                                id="nama_user"
                                value={nama_user}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                required
                                className="border shadow-inner rounded-xl w-full p-2 focus:outline-none focus:transition-none hover:shadow-sky-100"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-500" htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                value={email_user}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                                className="border shadow-inner rounded-xl w-full p-2 focus:outline-none focus:transition-none hover:shadow-sky-100"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-500" htmlFor="password"></label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password_user}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                                className="border shadow-inner rounded-xl w-full p-2 focus:outline-none focus:transition-none hover:shadow-sky-100"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-40 mt-2  text-gray-500">
                                {showPassword ? <BiHide size={25} /> : <BiShowAlt size={25} />}
                            </button>
                            <p class="flex items-start mt-2 text-xs text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-1.5">
                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                </svg>

                                Use at least 8 characters, one uppercase, one lowercase and one number.
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-500" htmlFor="confirmPassword"></label>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Konfirmasi Password"
                                required
                                className="border shadow-inner rounded-xl w-full p-2 focus:outline-none focus:transition-none hover:shadow-sky-100"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-40 mt-2  text-gray-500"
                            >
                                {showConfirmPassword ? <BiHide size={25} /> : <BiShowAlt size={25} />}
                            </button>
                        </div>
                        <button type="submit" className="w-full bg-sky-600 text-white p-2 rounded-xl hover:bg-sky-700 active:translate-y-2" >
                            Daftar
                        </button>
                        {error && <p className="mt-2 text-sm text-red-500 text-center">{error}</p>}

                        <p className="mt-4 text-center">
                            Sudah punya akun? <a className="text-sky-600 hover:underline" href="/signin">Masuk</a>
                        </p>

                        <p className="mt-2 text-center">atau</p>
                        <p className=" text-center">Masuk dengan</p>
                        <div className="flex justify-center mt-1">
                            <button className="flex items-center justify-center w-full bg-white rounded mt-1 -mb-1">
                                <img src={GoogleLogo} alt="Google Logo" className="h-7" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;