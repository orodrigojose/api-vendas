import { createConnection } from 'typeorm';

createConnection().then((e) => console.log("[!] Database has been connected!")).catch((err) => console.log(err));