import React from 'react'
import { useContext, useState } from 'react'
import { recipieContext } from '../context/Wrapper'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { set } from 'react-hook-form'

const SingleRecipe = () => {
    const { data, setdata, updateRecipeId, setUpdateRecipeId, updateFormData, setUpdateFormData, isFavourite, setisFavourite } = useContext(recipieContext);
    const params = useParams();
    const navigate = useNavigate();

    const recipe = data.find((item) => item.id === params.id);

    const deleteHandler = (id) => {
        const updatedData = data.filter(recipe => recipe.id !== id);
        setdata(updatedData);
        localStorage.setItem("data", JSON.stringify(updatedData));
        navigate('/recipes');
    }

    const updateHandler = (recipe) => {
        setUpdateRecipeId(recipe.id);
        setUpdateFormData({ ...recipe });
    }

    const submitUpdate = () => {
        const updatedData = data.map(recipe =>
            recipe.id === updateRecipeId ? updateFormData : recipe
        );
        setdata(updatedData);
        localStorage.setItem("data", JSON.stringify(updatedData));
        setUpdateRecipeId(null);
        toast.success("Recipe updated successfully!")
    }

    const favourite = (id) => {
        if (isFavourite.includes(id)) {
            const updatedFavourites = isFavourite.filter(fav => fav !== id);
            setisFavourite(updatedFavourites);
            localStorage.setItem("favourite", JSON.stringify(updatedFavourites));
        } else {
            setisFavourite([...isFavourite, id]);
            localStorage.setItem("favourite", JSON.stringify([...isFavourite, id]));
        }
    }
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateFormData({ ...updateFormData, [name]: value });
    }

    return (
        <div className="min-h-screen bg-gray-50 overflow-hidden">
            {recipe ? (
                <>
                    
                    <div className="bg-orange-500 text-white py-8">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <button 
                                onClick={() => navigate('/recipes')}
                                className="mb-4 text-orange-100 hover:text-white transition cursor-pointer font-semibold"
                            >
                                ← Back to Recipes
                            </button>
                            <h1 className="text-4xl md:text-5xl font-bold capitalize">{recipe.title}</h1>
                            <p className="text-orange-100 mt-2">By <span className="font-semibold capitalize">{recipe.chef}</span></p>
                        </div>
                    </div>

                   
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid md:grid-cols-3 gap-8">
                           
                            <div className="md:col-span-1">
                                <div className="relative">
                                    <img 
                                        src={recipe.image} 
                                        alt={recipe.title} 
                                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                                    />
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                                        {recipe.category}
                                    </div>
                                </div>
                            </div>

                            

                            
                            <div className="md:col-span-2">
                              
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">About this Recipe</h2>
                                    <p className="text-gray-700 text-lg leading-relaxed capitalize">{recipe.description.trim()}</p>
                                </div>

                                <div className="flex items-center gap-4 mb-8">
                                    <button 
                                        onClick={() => favourite(recipe.id)}
                                        className="text-4xl transition-all duration-300 hover:scale-110 cursor-pointer"
                                    >
                                        {isFavourite.includes(recipe.id) ? (
                                            <span className="text-red-500">❤</span>
                                        ) : (
                                            <span className="text-gray-400 hover:text-red-400">♡ <span className='text-2xl'>Add to Favourites</span></span>
                                        )}
                                    </button>
                                    {isFavourite.includes(recipe.id) && <p className="text-red-500 font-semibold">Added to favourites!</p>}
                                </div>

                                <div className="mb-8 bg-orange-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Ingredients</h3>
                                    <ul className="space-y-2">
                                        {recipe.ingredients.split(',').map((ingredient, index) => (
                                            <li key={index} className="flex items-start text-gray-700">
                                                <span className="text-orange-500 mr-3 font-bold">✓</span>
                                                <span className="capitalize">{ingredient.trim()}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                        
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Instructions</h3>
                                    <ol className="space-y-3">
                                        {recipe.instructions.split(',').map((instruction, index) => (
                                            <li key={index} className="flex items-start text-gray-700">
                                                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0 text-sm font-bold">
                                                    {index + 1}
                                                </span>
                                                <span className="pt-1 capitalize">{instruction.trim()}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                            
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <button 
                                        onClick={() => updateHandler(recipe)} 
                                        className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition"
                                    >
                                        Update Recipe
                                    </button>
                                    <button 
                                        onClick={() => deleteHandler(recipe.id)} 
                                        className="flex-1 bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition"
                                    >
                                        Delete Recipe
                                    </button>
                                </div>
                            </div>
                        </div>

                       
                        {updateRecipeId === recipe.id && (
                            <div className="mt-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500 overflow-auto max-h-screen">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Edit Recipe</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Image URL</label>
                                        <input
                                            type="text"
                                            name="image"
                                            value={updateFormData.image || ''}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={updateFormData.title || ''}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Chef Name</label>
                                        <input
                                            type="text"
                                            name="chef"
                                            value={updateFormData.chef || ''}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Category</label>
                                        <select
                                            name="category"
                                            value={updateFormData.category || 'Select a category'}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            Select a category
                                            <option value="Dessert">Dessert</option>
                                            <option value="Lunch">Lunch</option>
                                            <option value="Dinner">Dinner</option>
                                            <option value="Breakfast">Breakfast</option>
                                            <option value="Brunch">Brunch</option>
                                            <option value="Cocktail">Cocktail</option>
                                            <option value="Snack">Snack</option>
                                            <option value="Juice">Juice</option>
                                            <option value="Soup">Soup</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Description</label>
                                    <textarea
                                        name="description"
                                        value={updateFormData.description || ''}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        rows="4"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Ingredients (comma-separated)</label>
                                    <textarea
                                        name="ingredients"
                                        value={updateFormData.ingredients || ''}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        rows="4"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Instructions (comma-separated)</label>
                                    <textarea
                                        name="instructions"
                                        value={updateFormData.instructions || ''}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        rows="4"
                                    />
                                </div>
                                <div className="flex gap-4 mt-6">
                                    <button 
                                        onClick={submitUpdate} 
                                        className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                                    >
                                        Save Changes
                                    </button>
                                    <button 
                                        onClick={() => setUpdateRecipeId(null)} 
                                        className="flex-1 bg-gray-400 text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className="text-center py-20">
                    <h2 className="text-3xl font-bold text-gray-700 mb-4">Recipe not found</h2>
                    <button 
                        onClick={() => navigate('/recipes')}
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                    >
                        Back to Recipes
                    </button>
                </div>
            )}
        </div>
    )
}

export default SingleRecipe