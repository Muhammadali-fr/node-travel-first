import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="w-full backdrop-blur-lg shadow-md sticky top-0">
            <nav className="container mx-auto py-5">
                <ul className="flex space-x-5">
                    <li>
                        <NavLink
                            to="/"
                            className='bg-gray-200 px-4 py-3 rounded hover:bg-gray-300 cursor-pointer'
                        >
                            Travel Books
                        </NavLink>
                    </li>
                    <li>   
                        <NavLink
                            to="/form"
                            className='bg-gray-200 px-4 py-3 rounded hover:bg-gray-300 cursor-pointer'
                        >
                            Add Book
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
