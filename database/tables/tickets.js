const query = `CREATE TABLE IF NOT EXISTS ticketsSold (
    id VARCHAR(255) PRIMARY KEY,
    place VARCHAR(255) NOT NULL,
    show_name VARCHAR(255),
    buyer VARCHAR(255) NOT NULL,
    seller VARCHAR(255) NOT NULL,
    time VARCHAR(20),
    date DATE,
    time_of_booking TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (buyer) REFERENCES user(id),
    FOREIGN KEY (seller) REFERENCES seller(id)
);
`

export default query;