import mysql from 'mysql';
import { promisify } from 'util';

import keys from './keys';

const connection = mysql.createPool(keys);

connection.query = promisify(connection.query);

export default connection;