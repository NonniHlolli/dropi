

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'ykkvozlupgvldj',
  host: 'ec2-54-228-252-67.eu-west-1.compute.amazonaws.com',
  port: '5432',
  database: 'd5rljo47qov42f',
  password: '83e8b98a1a1c07a3bdd3bc374b7d0d305ea90745e8de7472ef3d7ca9645da3c2',
  ssl: require,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM Production', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


module.exports = {
  getUsers,
}

//"dbname=d5rljo47qov42f host=ec2-54-228-252-67.eu-west-1.compute.amazonaws.com port=5432 user=ykkvozlupgvldj password=83e8b98a1a1c07a3bdd3bc374b7d0d305ea90745e8de7472ef3d7ca9645da3c2 sslmode=require"
// const client = new Client({
//   user: 'ykkvozlupgvldj',
//   host: 'ec2-54-228-252-67.eu-west-1.compute.amazonaws.com',
//   port: '5432',
//   database: 'd5rljo47qov42f',
//   password: '83e8b98a1a1c07a3bdd3bc374b7d0d305ea90745e8de7472ef3d7ca9645da3c2',
//   ssl: require,
// });
//
//
// client.connect()
// .then(() => console.log('Mongodb connected'))
// .catch((err) => console.log(err));
//
// client.query(
//   'SELECT * FROM Boats',
//   (err, res) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//
//     client.end();
//   },
// );
