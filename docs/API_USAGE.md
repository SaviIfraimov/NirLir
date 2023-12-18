# API Documentation

## Authentication
- `POST /api/auth/login`: Authenticate a user.
- `POST /api/auth/logout`: Logout a user.

## Customers
- `GET /api/customers`: Retrieve all customers.
- `GET /api/customers/:id`: Retrieve a single customer.
- `GET /api/customers/:id/forecast`: Retrieve a single customer's PMs forecast.
- `POST /api/customers`: Create a new customer.
- `PUT /api/customers/:id`: Update an existing customer.

## Orders
- `GET /api/orders`: Retrieve all work orders.
- `GET /api/orders/:id`: Retrieve a single work order.
- `POST /api/orders`: Create a new work order.
- `PUT /api/orders/:id`: Update an existing work order.
