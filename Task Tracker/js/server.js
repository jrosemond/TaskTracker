
const mysql= require('mysql');

const connection = mysql.createConnection( {
  host: 'localhost',
  port: 3306,
  user:'root',
  password: 'password',
  database: 'todoapp'
});

// connection.connect( function(err) {
//     if(err){
//         return console.error('error' + err.message)
//     }
    
//     console.log('Connected to the MySQL Server')
// })

// connection.end(function(err) {
//     if (err) {
//       return console.log('error:' + err.message);
//     }
//     console.log('Close the database connection.');
//   });

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
});
    let createChores = `create table if not exists Chores(              
                            chore_name varchar(60),
                            done varchar(60)
                        )
  
    connection.query(createChores, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }
    });
  
    connection.end(function(err) {
      if (err) {
        return console.log(err.message);
      }
    });
