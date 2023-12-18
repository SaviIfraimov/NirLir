import { Request, Response } from 'express';
import customerService from '../services/customerService';

export const getAllCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await customerService.getAllCustomers();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getCustomerById = async (req: Request, res: Response) => {
    try {
        const customer = await customerService.getCustomerById(parseInt(req.params.id));
        res.json(customer);
    } catch (error) {
        const e = error as { message: string };
        if (e.message === 'Customer not found') {
            res.status(404).json({ message: e.message });
        } else {
            res.status(500).json({ message: 'Server error', error });
        }
    }
};

export const getCustomerForecastById = async (req: Request, res: Response) => {
    try {
        const customer = await customerService.getCustomerForecastById(parseInt(req.params.id));
        res.json(customer);
    } catch (error) {
        const e = error as { message: string };
        if (e.message === 'Customer not found') {
            res.status(404).json({ message: e.message });
        } else {
            res.status(500).json({ message: 'Server error', error });
        }
    }
};

export const createCustomer = async (req: Request, res: Response) => {
    try {
        const customer = await customerService.createCustomer(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateCustomer = async (req: Request, res: Response) => {
    try {
        const updatedCustomer = await customerService.updateCustomer(parseInt(req.params.id), req.body);
        res.json(updatedCustomer);
    } catch (error) {
        const e = error as { message: string };
        if (e.message === 'Customer not found') {
            res.status(404).json({ message: e.message });
        } else {
            res.status(500).json({ message: 'Server error', error });
        }
    }
};
