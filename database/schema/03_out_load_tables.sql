CREATE TABLE IF NOT EXISTS out_loads (
    id SERIAL PRIMARY KEY,
    party_id INTEGER REFERENCES party_master(id),
    driver_id INTEGER REFERENCES driver_master(id),
    transport_agency_id INTEGER REFERENCES transport_agency_master(id),
    driver_cost DECIMAL(10,2) DEFAULT 0,
    transport_cost DECIMAL(10,2) DEFAULT 0,
    total_bags INTEGER DEFAULT 0,
    total_weight DECIMAL(12,2) DEFAULT 0,
    total_revenue DECIMAL(12,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS out_load_bags (
    id SERIAL PRIMARY KEY,
    out_load_id INTEGER REFERENCES out_loads(id) ON DELETE CASCADE,
    bag_number INTEGER NOT NULL,
    stock_id INTEGER REFERENCES stock_master(id),
    stock_color VARCHAR(100),
    weight DECIMAL(10,2) NOT NULL,
    rate_per_kg DECIMAL(10,2),
    total_cost DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);