import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_PASS);

const keys = {
    host:       process.env.DB_HOST,
    user:       process.env.DB_USER,
    password:   process.env.DB_PASS,
    database:   process.env.DB_NAME
}

export default keys;