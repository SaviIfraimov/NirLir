import Customer from '../models/Customer';
import Order from '../models/Order';
import { Op } from 'sequelize'; // Sequelize operator

const getAllCustomers = async () => {
    return Customer.findAll();
};

const getCustomerById = async (customerId: number) => {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
        throw new Error('Customer not found');
    }
    return customer;
};

const getCustomerForecastById = async (customerId: number) => {
    const count = await Order.count({
      where: {
        customer_id: customerId,
        type: 'preventive maintenance',
        scheduled_date: {
          [Op.gt]: new Date()
        }
      }
    });
    return count;
  };

const createCustomer = async (customerData: any) => {
    return Customer.create(customerData);
};

const updateCustomer = async (customerId: number, customerData: any) => {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
        throw new Error('Customer not found');
    }
    return customer.update(customerData);
};

export default {
    getAllCustomers,
    getCustomerById,
    getCustomerForecastById,
    createCustomer,
    updateCustomer,
};
