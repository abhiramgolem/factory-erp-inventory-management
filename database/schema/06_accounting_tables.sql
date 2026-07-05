CREATE TABLE IF NOT EXISTS financial_transactions (
    id SERIAL PRIMARY KEY,

    transaction_type VARCHAR(50) NOT NULL,

    reference_table VARCHAR(100),

    reference_id INTEGER,

    amount DECIMAL(12,2) NOT NULL,

    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    remarks TEXT
);