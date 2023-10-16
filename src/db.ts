import postgres from "postgres";
import 'dotenv/config'

// console.log( 'BANCO DE DADOS ---------> ' + process.env.POSTGRES_DB);
// console.log( 'BANCO DE DADOS ---------> ' + process.env.POSTGRES_USER);
// console.log( 'BANCO DE DADOS ---------> ' + process.env.POSTGRES_PASSWORD);
// console.log( 'BANCO DE DADOS ---------> ' + process.env.HOSTNAME);

export const sql = postgres({
  database: 'postgres',
  password: '1234',
  host: 'database',
  user: 'postgres',
  max: 200, 
  idle_timeout: 0, 
  connect_timeout:10000
})


//  export const sql = postgres({
//     database: process.env.POSTGRES_DB,
//     password: process.env.POSTGRES_PASSWORD,
//     host: process.env.HOSTNAME,
//     user: process.env.POSTGRES_USER,
//     max: 200, 
//     idle_timeout: 0, 
//     connect_timeout:10000
//   })
  
