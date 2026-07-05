CREATE TABLE stock_master (
    id SERIAL PRIMARY KEY,
    stock_name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE party_master (
    id SERIAL PRIMARY KEY,
    party_name VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE driver_master (
    id SERIAL PRIMARY KEY,
    driver_name VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    vehicle_number VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transport_agency_master (
    id SERIAL PRIMARY KEY,
    agency_name VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_master (
    id SERIAL PRIMARY KEY,
    employee_name VARCHAR(255) NOT NULL,
    designation VARCHAR(100),
    monthly_salary DECIMAL(10,2),
    joining_date DATE,
    active BOOLEAN DEFAULT TRUE
);