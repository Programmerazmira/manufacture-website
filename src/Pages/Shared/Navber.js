import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const menuber = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
    </>
    return (
        <div>
            <div class="navbar bg-base-100 w-100">
                <div class="navbar-start ">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuber}
                        </ul>
                    </div>
                    <a href='/' class="btn btn-ghost normal-case text-2xl">Car Tools Manufacture Website</a>
                </div>
                <div class="navbar-end menu menu-horizontal p-0 hidden lg:flex">
                {menuber}
                </div>
            </div>
        </div>
    );
};

export default Navber;