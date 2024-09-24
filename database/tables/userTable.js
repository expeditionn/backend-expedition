const query = `CREATE TABLE IF NOT EXISTS user (
    id VARCHAR(255) PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    religion VARCHAR(30),
    profile_picture VARCHAR(255),
    line1 VARCHAR(255),
    line2 VARCHAR(255),
    district VARCHAR(255),
    state VARCHAR(255),
    pincode INT(6),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`

export default query;