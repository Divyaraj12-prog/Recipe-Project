import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-orange-500 text-white shadow-lg sticky top-0 z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    <div className="flex items-center">
                        <span className="text-2xl font-bold mr-2">🍳</span>
                        <span className="text-2xl font-bold">RecipeMaster</span>
                    </div>

                    
                    <div className="hidden md:flex space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-b-2 border-white pb-1 font-semibold'
                                    : 'hover:border-b-2 hover:border-orange-100 pb-1 transition'
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/recipes"
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-b-2 border-white pb-1 font-semibold'
                                    : 'hover:border-b-2 hover:border-orange-100 pb-1 transition'
                            }
                        >
                            Recipes
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-b-2 border-white pb-1 font-semibold'
                                    : 'hover:border-b-2 hover:border-orange-100 pb-1 transition'
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/create-recipes"
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold'
                                    : 'border-2 border-white hover:bg-white hover:text-orange-500 px-4 py-2 rounded-lg transition font-semibold'
                            }
                        >
                            Create Recipe
                        </NavLink>
                    </div>

                    
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex flex-col space-y-1"
                    >
                        <div className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                </div>
            </div>

            
            {isMenuOpen && (
                <div className="md:hidden bg-orange-600 px-4 pt-2 pb-4 space-y-3">
                    <NavLink
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? 'block py-2 px-3 bg-orange-700 rounded-lg font-semibold'
                                : 'block py-2 px-3 hover:bg-orange-700 rounded-lg transition'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/recipes"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? 'block py-2 px-3 bg-orange-700 rounded-lg font-semibold'
                                : 'block py-2 px-3 hover:bg-orange-700 rounded-lg transition'
                        }
                    >
                        Recipes
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? 'block py-2 px-3 bg-orange-700 rounded-lg font-semibold'
                                : 'block py-2 px-3 hover:bg-orange-700 rounded-lg transition'
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/create-recipes"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? 'block py-2 px-3 bg-white text-orange-500 rounded-lg font-semibold'
                                : 'block py-2 px-3 border-2 border-white hover:bg-white hover:text-orange-500 rounded-lg transition font-semibold'
                        }
                    >
                        Create Recipe
                    </NavLink>
                </div>
            )}
        </nav>
    )
}

export default Navbar