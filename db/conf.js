const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'task_aon',
    password: '12345',
    port: 5432,
})

client.connect((err => console.log("connected")));

module.exports = client;