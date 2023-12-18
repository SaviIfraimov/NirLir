import Order from '../models/Order';

const getAllOrders = async () => {
    return Order.findAll();
};

const getOrderById = async (orderId: number) => {
    const order = await Order.findByPk(orderId);
    if (!order) {
        throw new Error('Order not found');
    }
    return order;
};

const createOrder = async (orderData: any) => {
    const { scheduled_date, completion_date, ...restOfData } = orderData;
    const newOrderData = {
        ...restOfData,
        scheduled_date: scheduled_date || null, // Set to null if empty
        completion_date: completion_date || null, // Set to null if empty
    };

    return Order.create(newOrderData);
};

const updateOrder = async (orderId: number, orderData: any) => {
    const order = await Order.findByPk(orderId);
    if (!order) {
        throw new Error('Order not found');
    }
    return order.update(orderData);
};

export default {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
};
