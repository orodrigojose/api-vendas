import { createConnection } from 'typeorm';

createConnection().then((e) => console.log(e)).catch((err) => console.log(err));