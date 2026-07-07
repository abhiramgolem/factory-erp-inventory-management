CREATE TABLE driver_master (
    id SERIAL PRIMARY KEY,
    driver_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    vehicle_number VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);