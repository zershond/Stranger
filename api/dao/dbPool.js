/**
 * Created by zershond on 2017/6/27.
 */
var mysql = require("mysql");

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test2",
  port: 3306
})

module.export = pool;
