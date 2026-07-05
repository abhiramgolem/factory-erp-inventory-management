CREATE TABLE IF NOT EXISTS attendance (
    id SERIAL PRIMARY KEY,
    employee_id INTEGER REFERENCES employee_master(id),
    attendance_date DATE NOT NULL,
    attendance_value DECIMAL(4,2) NOT NULL,
    overtime_hours DECIMAL(5,2) DEFAULT 0,
    notes TEXT,
    UNIQUE(employee_id, attendance_date)
);

CREATE TABLE IF NOT EXISTS salary_records (
    id SERIAL PRIMARY KEY,
    employee_id INTEGER REFERENCES employee_master(id),
    salary_month INTEGER NOT NULL,
    salary_year INTEGER NOT NULL,
    working_days DECIMAL(5,2),
    worked_days DECIMAL(5,2),
    overtime_hours DECIMAL(6,2),
    base_salary DECIMAL(12,2),
    overtime_amount DECIMAL(12,2),
    total_salary DECIMAL(12,2),
    paid_status BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bills (
    id SERIAL PRIMARY KEY,
    bill_type VARCHAR(100) NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    bill_date DATE NOT NULL,
    due_date DATE,
    paid_status BOOLEAN DEFAULT FALSE,
    notes TEXT
);

CREATE TABLE IF NOT EXISTS expenses (
    id SERIAL PRIMARY KEY,
    expense_date DATE NOT NULL,
    category VARCHAR(100),
    description TEXT,
    amount DECIMAL(12,2) NOT NULL,
    paid_to VARCHAR(255),
    payment_mode VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);