CREATE TABLE IF NOT EXISTS in_loads (
    id SERIAL PRIMARY KEY,
    party_id INTEGER REFERENCES party_master(id),
    driver_id INTEGER REFERENCES driver_master(id),
    driver_cost DECIMAL(10,2) DEFAULT 0,
    total_bags INTEGER DEFAULT 0,
    total_weight DECIMAL(12,2) DEFAULT 0,
    total_cost DECIMAL(12,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS in_load_bags (
    id SERIAL PRIMARY KEY,
    in_load_id INTEGER REFERENCES in_loads(id) ON DELETE CASCADE,
    bag_number INTEGER NOT NULL,
    stock_id INTEGER REFERENCES stock_master(id),
    stock_color VARCHAR(100),
    weight DECIMAL(10,2) NOT NULL,
    rate_per_kg DECIMAL(10,2),
    total_cost DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS inventory (
    id SERIAL PRIMARY KEY,
    stock_id INTEGER REFERENCES stock_master(id),
    stock_color VARCHAR(100),
    total_bags INTEGER DEFAULT 0,
    total_weight DECIMAL(12,2) DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(stock_id, stock_color)
);

CREATE TABLE IF NOT EXISTS inventory_transactions (
    id SERIAL PRIMARY KEY,
    stock_id INTEGER REFERENCES stock_master(id),
    stock_color VARCHAR(100),
    transaction_type VARCHAR(50),
    reference_id INTEGER,
    quantity DECIMAL(12,2),
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);