-- Create a 'customers' table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(255),
    contact TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT NULL
);

-- Create an 'orders' table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    type VARCHAR(100),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT NULL,
    scheduled_date DATE DEFAULT NULL,
    completion_date DATE DEFAULT NULL,
    assigned_technician VARCHAR(255),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);