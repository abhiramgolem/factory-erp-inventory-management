CREATE TABLE employee_master (
    id SERIAL PRIMARY KEY,
    employee_name VARCHAR(255) NOT NULL,
    designation VARCHAR(255),
    monthly_salary NUMERIC(12,2),
    joining_date DATE,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);