import React from "react";

const Navbar = () => {
    return (
        <nav class="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
            <div class="container mx-auto py-5 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="text-2x1 font-bald text-indigo-900 dark:text-white"
                    >Crew Gamble</span>
                </div>
                <ul class="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
                >
                    <li class="hover:text-gray-500">
                        <a href="#">home</a>
                    </li>
                    <li class="hover:text-gray-500">
                        <a href="#about">About Me</a>
                    </li>
                    <li class="hover:text-gray-500">
                        <a href="#works">Projects</a>
                    </li>
                    <li class="hover:text-gray-500">
                        <a href="#works">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar