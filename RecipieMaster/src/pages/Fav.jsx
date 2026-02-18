import React from 'react'
import { recipieContext } from '../context/Wrapper'
import { useNavigate } from 'react-router-dom'

const Fav = () => {
    const { isFavourite, data } = React.useContext(recipieContext);
    const navigate = useNavigate();
    

    const favouriteRecipes = data.filter(recipe => 
        isFavourite.some(fav => fav.id === recipe.id)
    );

    return (
        <div className="min-h-screen bg-gray-50">
       
            <div className="bg-orange-500 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">My Favourite Recipes</h1>
                    <p className="text-orange-100 mt-2">
                        {favouriteRecipes.length === 0 
                            ? "Start adding your favorite recipes!" 
                            : `You have ${favouriteRecipes.length} Favourite Recipe${favouriteRecipes.length !== 1 ? 's' : ''}`}
                    </p>
                </div>
            </div>

         
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {favouriteRecipes.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">💔</div>
                        <p className="text-gray-600 text-xl mb-6">You haven't added any favorite recipes yet</p>
                        <button
                            onClick={() => navigate('/recipes')}
                            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                        >
                            Browse Recipes
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {favouriteRecipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                            >
                              
                                <div className="relative h-48 overflow-hidden bg-gray-200 capitalize">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                    />
                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                        ❤ Favourite
                                    </div>
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                                        {recipe.category}
                                    </div>
                                </div>

                        
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 capitalize">{recipe.title}</h3>

                                    <p className="text-sm text-gray-600 mb-3">by <span className="font-semibold capitalize">{recipe.chef}</span></p>

                                    <p className="text-gray-700 text-sm mb-4 line-clamp-2 capitalize">{recipe.description}</p>

                             
                                    <button
                                        onClick={() => navigate(`/single-recipe/${recipe.id}`)}
                                        className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                                    >
                                        View Recipe
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Fav