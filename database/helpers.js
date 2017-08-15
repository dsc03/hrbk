const db = require('./index'); 


var find = function(query, table, callback) {
/**
 * @param {string} query: type of
 * @param {string} table: id your table 
 * to select all, pass '*' as query; 
*/
  table = table || 'profiles';
  var sql = `SELECT ${query} FROM ${table};`;
  db.query(sql, function(err, res) {
    callback(res); 
  });
};

var addUser = function(email, userphoto, firstname, lastname, password, callback) {
/**
 * @param {string} 
 * to select all, pass '*' as query
*/
  var options = [email, userphoto, firstname, lastname, password]; 
  
  var sql = `
    INSERT INTO users (email, userphoto, firstname, lastname, password)
    VALUES (?, ?, ?, ?, ?);`;
  db.query(sql, options, function(err, res) {
    callback(res);
  });
};


module.exports.find = find;
module.exports.addUser = addUser;

