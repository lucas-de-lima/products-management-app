import axios from 'axios';

interface ProductData {
  name: string;
  description: string;
  price: string;
  available: Array<string>;
}

export const postProduct = async (data: ProductData) => {
  try {
    const response = await axios.post('http://localhost:3001/api/products', data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to post product');
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/products', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    throw new Error('Failed to get products');
  }
};
