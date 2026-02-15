import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About RecipeMaster</h1>
          <p className="text-orange-100 mt-2">Discover our story and mission</p>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              RecipeMaster is dedicated to bringing food enthusiasts together in a vibrant community where recipes are shared, celebrated, and perfected. We believe that cooking is both an art and a science, and everyone deserves access to high-quality recipes from around the world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform empowers home cooks and professional chefs alike to discover new flavors, learn new techniques, and share their culinary creations with a passionate community.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-6xl mb-4 text-center">🎯</div>
            <p className="text-center text-gray-700 font-semibold">Connecting Food Lovers Worldwide</p>
          </div>
        </div>

        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
           
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🌮</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Diversity</h3>
              <p className="text-gray-600">
                We celebrate recipes from all cuisines, cultures, and cooking styles, making culinary knowledge accessible to everyone.
              </p>
            </div>

            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                Every recipe is crafted with care and tested to ensure the best results for our community members.
              </p>
            </div>

            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                We foster a supportive environment where food lovers can share experiences, tips, and inspire one another.
              </p>
            </div>
          </div>
        </div>

        
        <div className="bg-orange-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            RecipeMaster was founded with a simple vision: to create a platform where people could easily find, share, and celebrate recipes from their favorite cuisines. What started as a passion project has grown into a thriving community of food enthusiasts.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Today, RecipeMaster is home to thousands of recipes, from traditional family favorites to innovative new creations. Our users span the globe, united by their love of good food and the desire to explore new culinary horizons.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We continue to innovate and improve our platform to serve our community better, always keeping our core mission in mind: to make cooking accessible, enjoyable, and inspiring for everyone.
          </p>
        </div>
      </div>

      
      <div className="bg-orange-500 text-white py-12 mt-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-orange-100 mb-6">Have questions or feedback? We'd love to hear from you!</p>
          <Link to = "https://www.linkedin.com/in/divyaraj-purohit-b716a92b8" className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-100 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About