import React from "react";
import { NavLink } from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar(){
    return(
        <header className="bg-purple-900 bg-opacity-80">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to='/' 
                    exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-green-400 hover:text-purple-300  text-4xl font-bold cursive tracking-widest">
                        Ataraxia
                    </NavLink>
                    <NavLink to='/post'
                    activeClassName="text-purple-100 bg-purple-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-400 hover:text-purple-800"
                    >
                        Tratamiento
                    </NavLink>
                    <NavLink to='/about'
                    activeClassName="text-purple-100 bg-purple-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-400 hover:text-purple-800"
                    >
                        Nosotros
                    </NavLink>
                    <NavLink to='/project'
                    activeClassName="text-purple-100 bg-purple-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-400 hover:text-purple-800"
                    >
                        Blog Posts
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com/AtaraxiaMkp"
                     className="mr-4" 
                     target="_blank" 
                     fgColor="#ffff" 
                     style={{heigth:35, width:35}} 
                    />
                    <SocialIcon url="https://www.instagram.com/ataraxiamkup/"
                     className="mr-4" 
                     target="_blank" 
                     fgColor="#ffff" 
                     style={{heigth:35, width:35}} 
                    />

                </div>
            </div>
        </header>
    )
}