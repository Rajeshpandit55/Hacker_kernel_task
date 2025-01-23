import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [error, setError] = useState("");

  // Load products from localStorage when component mounts
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  // Handle the form submission to add a product
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!productName || !productPrice) {
      setError("Please fill in both fields.");
      return;
    }

    if (products.some((product) => product.name === productName)) {
      setError("Product already exists.");
      return;
    }

    const newProduct = { name: productName, price: productPrice };
    const updatedProducts = [...products, newProduct];

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); // Save to localStorage
    setProductName("");
    setProductPrice("");
    setError("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Product</h2>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <div className="form-group">
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            className="w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="productPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Enter product price"
            className="w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2"
          />
        </div>
        {error && (
          <p className="text-red-600 text-sm font-medium mt-2">{error}</p>
        )}
        <button
          onClick={() => toast.success('Product added successfully!')}
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Product
        </button>
        
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddProduct;
