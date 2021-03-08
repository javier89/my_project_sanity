import React from "react";
import logo from '../logo.png';

export default function Home() {
    return(
        <main>
            <img 
             src={logo} 
             alt="Ataraxia" 
             className="absolute object-cover w-full h-full" 
            />

            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none 
                lg:leading-snug 
                home-name "
                >
                    Aloha this is 
                </h1>
            </section>

        </main>
    )
}
