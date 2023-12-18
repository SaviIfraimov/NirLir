import axios from 'axios';
import { Order } from '../types/Order';

const API_URL = 'http://localhost:3000/api'; // For production purposes, better uses different .env. Not hardcoding.

export const getOrders = async (search: string): Promise<Order[]> => {
  const response = await axios.get(`${API_URL}/orders`, {
    params: { search }
  });
  return response.data;
};

export const updateOrder = async (id: number, orderData: Partial<Order>): Promise<Order> => {
    const response = await axios.put(`${API_URL}/orders/${id}`, orderData);
    return response.data;
};

export const createOrder = async (orderData: Order): Promise<Order> => {
    const response = await axios.post(`${API_URL}/orders`, orderData);
    return response.data;
  };
