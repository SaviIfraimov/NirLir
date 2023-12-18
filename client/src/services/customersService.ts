import axios from 'axios';
import { Customer } from '../types/Customer';

const API_URL = 'http://localhost:3000/api'; // Adjust if your API is on a different port or host

export const getCustomers = async (search: string): Promise<Customer[]> => {
  const response = await axios.get(`${API_URL}/customers`, {
    params: { search }
  });
  return response.data;
};

export const forecastPMCustomer = async (customerId: number): Promise<number> => {
  try {
    const response = await axios.get(`${API_URL}/customers/${customerId}/forecast`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw new Error('Failed to fetch forecast');
  }
};

