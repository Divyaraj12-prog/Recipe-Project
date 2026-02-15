import React, { useState } from 'react'
import { recipieContext } from '../context/Wrapper'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



const Create = () => {
    const { data, setdata  } = useContext(recipieContext);
    const navigate = useNavigate();

    const categories = [
        'Select a category',
        'Lunch',
        'Dinner',
        'Dessert',
        'Breakfast',
        'Brunch',
        'Snack',
        'Cocktail',
        'Juice',
        'Soup',
        'Other'
    ]

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const imageUrlValue = watch('imageUrl');

    const Submit = (formData) => {
        formData.id = nanoid();
        const newRecipe = {
            id: formData.id,
            image: formData.imageUrl,
            title: formData.recipeTitle,
            chef: formData.chefName,
            category: formData.category,
            description: formData.description.trim(),
            ingredients: formData.ingredients,
            instructions: formData.instructions.trim()
        };
        console.log(newRecipe);
        
        setdata([...data, newRecipe]);
        localStorage.setItem("data", JSON.stringify([...data, newRecipe]));
        reset();
        toast.success('Recipe created successfully!');
        navigate('/recipes');
    }
    

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-orange-500 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Create Your Recipe</h1>
                    <p className="text-orange-100 mt-2">Share your culinary creation with our community</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <form onSubmit={handleSubmit(Submit)} className="bg-white rounded-lg shadow-lg p-8">

                    {/* Image URL Input */}
                    <div className="mb-8">
                        <label className="block text-gray-800 font-semibold mb-2">Recipe Image URL</label>
                        <input
                            type="url"
                            {...register('imageUrl', {
                                required: 'Image URL is required',
                            })}
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl.message}</p>}
                        <p className="text-gray-500 text-sm mt-2">Copy the Image Address of your Picture and Paste it here</p>

                        {/* Image Preview */}
                        {imageUrlValue && (
                            <div className="mt-4">
                                <img
                                    src={imageUrlValue}
                                    alt="Preview"
                                    className="h-40 w-40 object-cover rounded-lg"
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Recipe Title */}
                    <div className="mb-8">
                        <label className="block text-gray-800 font-semibold mb-2">Recipe Title *</label>
                        <input
                            type="text"
                            {...register('recipeTitle', { required: 'Recipe title is required' })}
                            placeholder="e.g., Chocolate Chip Cookies"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.recipeTitle && <p className="text-red-500 text-sm mt-1">{errors.recipeTitle.message}</p>}
                    </div>

                    {/* Chef Name */}
                    <div className="mb-8">
                        <label className="block text-gray-800 font-semibold mb-2">Chef Name *</label>
                        <input
                            type="text"
                            {...register('chefName', { required: 'Chef name is required' })}
                            placeholder="Your name or kitchen name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.chefName && <p className="text-red-500 text-sm mt-1">{errors.chefName.message}</p>}
                    </div>

                    {/* Category */}
                    <div className="mb-8">
                        <label className="block text-gray-800 font-semibold mb-2">Category *</label>
                        <select
                            {...register('category', { required: 'Category is required' })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            {categories.map((cat, index) => (
                                <option key={index} value={cat === 'Select a category' ? '' : cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <label className="block text-gray-800 font-semibold mb-2">Description *</label>
                        <textarea
                            {...register('description', { required: 'Description is required' })}
                            placeholder="Tell us about your recipe. What makes it special? Any tips?"
                            rows="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                        <p className="text-gray-500 text-sm mt-2">Share your thoughts and tips about this recipe</p>
                    </div>

                    {/* Ingredients */}
                    <div className="mb-8">
                        <label className="block text-gray-800 font-semibold mb-2">Ingredients *</label>
                        <textarea
                            {...register('ingredients', { required: 'Ingredients are required' })}
                            placeholder="Enter ingredients separated by commas&#10;e.g., 2 cups flour, 1 cup sugar, 2 eggs, 1 tsp vanilla"
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                        ></textarea>
                        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients.message}</p>}
                        <p className="text-gray-500 text-sm mt-2">Separate each ingredient with a comma</p>
                    </div>

                    {/* Instructions */}
                    <div className="mb-8">
                        <label className="block text-gray-800 font-semibold mb-2">Instructions *</label>
                        <textarea
                            {...register('instructions', { required: 'Instructions are required' })}
                            placeholder="Enter cooking instructions separated by commas&#10;e.g., Preheat oven to 350F, Mix dry ingredients, Add wet ingredients, Bake for 30 minutes"
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                        ></textarea>
                        {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions.message}</p>}
                        <p className="text-gray-500 text-sm mt-2">Separate each step with a comma</p>
                    </div>

                    {/* Form Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            type="submit"
                            className="flex-1 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
                        >
                            Save Recipe
                        </button>
                        <button
                            type="reset"
                            className="flex-1 bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-400 transition duration-300"
                        >
                            Clear Form
                        </button>
                    </div>
                </form>

                {/* Info Box */}
                <div className="mt-8 bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                    <h3 className="font-bold text-gray-800 mb-2">Tips for Creating a Great Recipe Post</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Use clear, descriptive ingredient names and quantities</li>
                        <li>Break down instructions into clear, sequential steps</li>
                        <li>Include preparation and cooking times</li>
                        <li>Add high-quality images for better appeal</li>
                        <li>Be specific about cooking temperatures and techniques</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Create