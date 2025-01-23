import React, { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load products from localStorage when component mounts
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="max-w-xxl mx-auto p-6 bg-white shadow-md rounded-md">
      <h3 className="text-xl font-semibold text-gray-800 mt-6">Product List</h3>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full p-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600 mt-2">No products found.</p>
      ) : (
     
        
        <div className="p-4">
        {/* Headers */}
        <div className="flex justify-between pb-2 border-b border-gray-300">
          <span className="font-semibold text-gray-800">Product Name</span>
          <span className="font-semibold text-gray-800">Product Price</span>
        </div>
      
        {/* Product List */}
        <ul className="mt-4 space-y-2">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((product) => (
              <li
                key={product.id || product.name} // Use a unique identifier if available
                className="p-4 bg-gray-100 rounded-md shadow-sm"
              >
                {/* Flex container for horizontal layout */}
                <div className="flex justify-between items-center">
                  {/* Product Name */}
                  <p className="font-semibold text-gray-700">{product.name}</p>
      
                  {/* Product Price */}
                  <span className="text-gray-600">₹{product.price}</span>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </ul>
      </div>
      


      )}
 
    </div>
  );
};

export default Home;
