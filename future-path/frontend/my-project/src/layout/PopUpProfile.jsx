
// src/components/PopUpProfile.js
import React, { useState, useRef, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { getEmail, getRoleId, getToken, getUsername, logout } from '../../../api/services/auth';
import { Link } from 'react-router-dom';

const PopUpProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const PopUpProfileRef = useRef(null);
    const token = getToken();
    const role = getRoleId();
    const username = getUsername();
    const email = getEmail();

    const togglePopUpProfile = () => {
        setIsOpen(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (PopUpProfileRef.current && !PopUpProfileRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (

        <div className="relative inline-block text-left" ref={PopUpProfileRef}>
            <form>
                <div class="flex">
                    <button
                        onClick={togglePopUpProfile}
                        className="py-3 px-3 rounded-full flex-shrink-0 z-10 inline-flex hover:shadow-inner hover:shadow-gray-300 focus:shadow-inner focus:shadow-gray-300 "
                        type='button'>
                        <CgProfile size={25} />
                        <svg class="w-2.5 h-2.5 -ms-2.5 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6">
                        </svg>
                    </button>
                </div>
            </form>

            {isOpen && (
                <div className="z-10 absolute right-0 w-48 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
                    <ul className="py-2 text-sm text-gray-700">
                        <li className='px-4 py-1 leading-5 cursor-text'>
                            <div className=''>{username}</div>
                            <div className='border-b-2 border-b-sky-600 text-xs'>{email}</div>
                        </li>
                        <Link
                            to="/signin"
                            onClick={() => {
                                logout();
                            }}
                        >
                            <li className='hover:bg-red-800 text-black hover:text-white  rounded-lg'>
                                <button
                                    className="block px-4 py-2 rounded-xl ">
                                    <h2
                                    >
                                        Keluar
                                    </h2>
                                    <CiLogout className='absolute right-4 top-16 -mt-[2px] text-white' size={20} />
                                </button>
                            </li>
                        </Link>
                    </ul>
                </div>
            )}

        </div>
    );
};

export default PopUpProfile;