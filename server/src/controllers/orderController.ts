import { Request, Response } from 'express';
import Order from '../models/Order';

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.findAll();
        return res.json(orders);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ message: ' Order not found' });
        }
        return res.json(order);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

export const createOrder = async (req: Request, res: Response) => {
    try {
        const { scheduled_date, completion_date, ...restOfData } = req.body;
        const newOrderData = {
            ...restOfData,
            scheduled_date: scheduled_date || null, // Set to null if empty
            completion_date: completion_date || null, // Set to null if empty
        };

        const newOrder = await Order.create(newOrderData);
        res.status(201).json(newOrder);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

export const updateOrder = async (req: Request, res: Response) => { //orderId: number,
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ message: ' Order not found' });
        }
        const updatedOrder = await order.update(req.body); //orderData
        return res.json(updatedOrder);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

// export const deleteOrder = async (req: Request, res: Response) => {
//     try {
//         const order = await Order.findByPk(req.params.id);
//         if (!Order) {
//             return res.status(404).json({ message: ' Order not found' });
//         }
//         await Order.destroy();
//         return res.json({ message: ' Order deleted' });
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error });
//     }
// };
