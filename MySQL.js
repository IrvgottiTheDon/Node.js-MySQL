var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});
connection.config
//console.log(connection.config);
var QRY = connection.query("select item_id as value, product_name as name from products", function (err, dataSet) {
  var dataString = JSON.stringify(dataSet)
  var dataParse = JSON.parse(dataString)
  // console.log(dataSet)
  // console.log(dataParse)
  selectProduct(dataParse)
})

function selectProduct(selections) {
  inquirer.prompt([{
      type: "rawlist",
      name: "product",
      choices: selections,
      messages: "text",
    },
    {
      type: "number",
      name: "quantity",
      messages: "text",
    }
  ]).then(function (resp) {
    console.log(resp)
  })
}

// // connect to the mysql server and sql database
// connection.connect(function(err) {
//     if (err) throw err;
//     // run the start function after the connection is made to prompt the user
//     start();
//   });