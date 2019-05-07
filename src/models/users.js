import connection from '../database/connection';

let users = {};

users.getUsers = async () => {
    if (connection) {
        try {
            return await connection.query('SELECT * FROM node_restapi_mysql_users');
        } catch (error) {
            console.log(error);
        }
    }
}

users.insertUser = async (new_user) => {
    if (connection) {
        try {
            return await connection.query('INSERT INTO node_restapi_mysql_users SET ?', new_user);
        } catch (error) {
            console.log(error);
        }
    }
}

users.updateUser = async (update_user) => {
    if (connection) {
        try {

            const query = `
                UPDATE node_restapi_mysql_users SET 
                username = ${connection.escape()}
            `;

            return await connection.query(query);
        } catch (error) {
            
        }
    }
}

export default users;