import React from 'react';
import {FiMenu} from "react-icons/fi";
import AppContext from '../context/AppContext';
import { useContext } from 'react';

const Header = () => {
    const {isMenuOpen, setIsMenuOpen, user, setUser} = useContext(AppContext)
  return (
    <div className='Header'>
        <div className="header-tile">
            <h1>
                <a href="#">DavNews</a>
            </h1>
            {user && 
                <>
                    <nav>
                        <a href="#">
                            All Articles
                        </a>
                        <a href="#">
                            My Articles
                        </a>
                        <a href="#">
                            Create Article 
                        </a>
                    </nav>
                    <button className="menu">
                        <FiMenu></FiMenu>
                    </button>
                </>
            }
        </div>
    </div>
  )
}

export default Header