const query = `CREATE TABLE IF NOT EXISTS availableTickets (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    place VARCHAR(255) NOT NULL,
    show_name VARCHAR(255),
    description TEXT,
    seller VARCHAR(255) NOT NULL,
    time VARCHAR(20),
    date DATE,
    available BOOLEAN,
    noOfTickets INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (seller) REFERENCES seller(id)
);
`

export default query;