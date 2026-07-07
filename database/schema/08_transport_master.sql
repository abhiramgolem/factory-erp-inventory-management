CREATE TABLE transport_master (
    id SERIAL PRIMARY KEY,
    agency_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);