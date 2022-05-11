import {createPool} from 'mysql'

export const bd = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'instrumentosdb',
    connectionLimit: 10
  });
  