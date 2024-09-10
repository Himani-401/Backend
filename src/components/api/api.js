
import axios from 'axios';
const API_BASE_URL = 'https://fakestoreapi.com';

export async function fetchCategories() {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`, { timeout: 10000 }); // 10 seconds timeout
        const products = response.data;
        const categories = [...new Set(products.map(product => product.category))];
        return categories.map(category => ({ id: category, name: category }));
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

export async function fetchProductsByCategory(category) {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/category/${category}`, { timeout: 10000 });
        return response.data;
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return [];
    }
}

export async function fetchAllProducts() {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`, { timeout: 10000 });
        return response.data;
    } catch (error) {
        console.error('Error fetching all products:', error);
        return [];
    }
}
