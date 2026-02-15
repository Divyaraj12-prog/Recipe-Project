import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-orange-500 to-red-500 text-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to RecipeMaster</h1>
              <p className="text-lg md:text-xl mb-8 text-orange-100">
                Discover, create, and share your favorite recipes with a passionate community of food lovers.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/recipes"
                  className="bg-white text-orange-500 text-center px-8 py-3 rounded-lg font-semibold hover:bg-orange-100 transition"
                >
                  Explore Recipes
                </Link>
                <Link 
                  to="/create-recipes"
                  className="border-2 border-white text-white text-center px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition"
                >
                  Create Recipe
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-red-400 rounded-lg blur-lg opacity-75"></div>
                <div className="relative bg-white rounded-lg p-8 text-center">
                  <div className="text-6xl">🍳</div>
                  <p className="text-gray-600 mt-4">Master the Art of Cooking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why Choose RecipeMaster?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Vast Collection</h3>
            <p className="text-gray-600">Thousands of recipes from different cuisines and cultures at your fingertips.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Expert Chefs</h3>
            <p className="text-gray-600">Learn from professional chefs and experienced home cooks sharing their expertise.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Easy to Follow</h3>
            <p className="text-gray-600">Clear instructions and ingredient lists make cooking accessible for everyone.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-500 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Cook Something Amazing?</h2>
          <p className="text-lg mb-8 text-orange-100">Join our community and start sharing your culinary creations today!</p>
          <Link 
            to="/create-recipes"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-100 transition"
          >
            Create Your First Recipe
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home