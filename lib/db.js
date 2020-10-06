var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'js'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

connection.query('SELECT * FROM profiles WHERE  id=1', function (error, results, fields) { // Свой запрос
    if (error) throw error;
        console.log('The solution is: ', results[0]);
    });

connection.end();