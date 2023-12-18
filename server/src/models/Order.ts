import { DataTypes } from 'sequelize';
import sequelize from '../config/db/sequelizeConfig';

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'customers', // Should match the table name exactly.
            key: 'id',
        },
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE
    },
    scheduled_date: {
        type: DataTypes.DATEONLY // Use DATEONLY for 'date' type without time.
    },
    completion_date: {
        type: DataTypes.DATEONLY // Use DATEONLY for 'date' type without time.
    },
    assigned_technician: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'orders',
    timestamps: true, // If you want Sequelize to automatically manage `created_at` and `updated_at`.
    createdAt: 'created_at', // Explicitly tell Sequelize the name of the createdAt field
    updatedAt: 'updated_at', // Explicitly tell Sequelize the name of the updatedAt field
});

export default Order;