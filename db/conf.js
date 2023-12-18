// const { Client } = require('pg');
const { Pool } = require('pg');
const client = new Pool({
connectionString: "postgres://default:pm7EizBW2VsU@ep-red-waterfall-35505232.us-east-1.postgres.vercel-storage.com:5432/verceldb" + "?sslmode=require",
})


// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'task_aon',
//     password: '12345',
//     port: 5432,
// })

client.connect((err => console.log("connected")));

module.exports =client ;