import axios, { Method } from 'axios';

export const apiCall = async (method: Method, url: string, data: any = null) => {
    try {
        const response = await axios({ method, url, data });
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

