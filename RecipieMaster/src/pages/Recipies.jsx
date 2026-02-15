import React, { useContext, useState } from 'react'
import { recipieContext } from '../context/Wrapper'
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Recipies = () => {
const {data} = useContext(recipieContext);


  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Our Recipes</h1>
          <p className="text-orange-100 mt-2">Explore Delicious recipes around the world</p>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {data.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No recipes yet. Start by creating one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((recipe) => (
              <div 
                key={recipe.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
               
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {recipe.category}
                  </div>
                </div>

               
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 capitalize">{recipe.title}</h3>
                  
                  <p className="text-sm text-gray-600 mb-3">By <span className="font-semibold capitalize">{recipe.chef}</span></p>
                  
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2 capitalize">{recipe.description.slice(0, 100)} {recipe.description.length > 100 ? "..." : ""}</p>

                  
                  <Link to={`/single-recipe/${recipe.id}`} className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition block text-center">
                    View Recipe
                  </Link>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )

}

export default Recipies