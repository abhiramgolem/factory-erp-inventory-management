CREATE TABLE IF NOT EXISTS production (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_color VARCHAR(100),
    total_weight DECIMAL(12,2) DEFAULT 0,
    raw_material_used DECIMAL(12,2) DEFAULT 0,
    waste_generated DECIMAL(12,2) DEFAULT 0,
    production_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT
);

CREATE TABLE IF NOT EXISTS material_usage (
    id SERIAL PRIMARY KEY,
    stock_id INTEGER REFERENCES stock_master(id),
    stock_color VARCHAR(100),
    weight_used DECIMAL(12,2) NOT NULL,
    usage_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT
);

CREATE TABLE IF NOT EXISTS waste_sales (
    id SERIAL PRIMARY KEY,
    buyer_name VARCHAR(255) NOT NULL,
    waste_type VARCHAR(100),
    total_weight DECIMAL(12,2) NOT NULL,
    rate_per_kg DECIMAL(10,2) NOT NULL,
    total_revenue DECIMAL(12,2) NOT NULL,
    driver_id INTEGER REFERENCES driver_master(id),
    driver_cost DECIMAL(10,2) DEFAULT 0,
    sold_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);