import { DataTypes } from 'sequelize';
import sequelize from '../config/db/sequelizeConfig';

const Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  logo_url: {
    type: DataTypes.STRING,
  },
  contact: {
    type: DataTypes.STRING,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'customers',
  timestamps: true, // If you want Sequelize to automatically manage `created_at` and `updated_at`.
  createdAt: 'created_at', // Explicitly tell Sequelize the name of the createdAt field
  updatedAt: 'updated_at', // Explicitly tell Sequelize the name of the updatedAt field
});

export default Customer;

