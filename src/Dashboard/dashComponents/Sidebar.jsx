import{React} from 'react';
import {Link, NavLink} from 'react-router-dom'

const Sidebar = ( ) =>{
    return(
        <nav className="flex items-center justify-between w-full h-16 bg-gray-900 px-4">
            <Link to="/" className="text-white">
                <h1 className="text-2xl">React App</h1>
            </Link>
            <ul className="flex">
                <li className="mr-4">
                    <NavLink to="/" exact activeClassName="text-white underline">Home</NavLink>
                </li>
                <li className="mr-4">
                    <NavLink to="/about" activeClassName="text-white underline">About</NavLink>
                </li>
                <li className="mr-4">
                    <NavLink to="/contact" activeClassName="text-white underline">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;

