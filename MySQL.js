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
connection.query("select item_id as value, product_name as name from products", function (err, dataSet) {
  var dataString = JSON.stringify(dataSet)
  var dataParse = JSON.parse(dataString)
  // console.log(dataSet)
  // console.log(dataParse)
  selectProduct(dataParse)
})

function selectProduct(selections) {
  inquirer.prompt([{
      type: "rawlist",
      name: "item_id",
      choices: selections,
      message: "Select Product",
    },
    {
      type: "number",
      name: "order_quantity",
      message: "Add Quantity",
    }
  ]).then(function (resp){
    processOrder(resp)
    console.log("");
  });
}

  function processOrder(resp){ 
    console.log(resp)
    qryOpt = [resp.order_quantity, resp.item_id]
    console.log(qryOpt)
    connection.query("SELECT stock_quantity FROM products WHERE item_id = ?", resp.item_id, function (err, dataset) {
      if (err) {
        connection.end();
        return console.log(err)
      }
      
      if (dataset[0].stock_quantity < resp.order_quantity){
        Console.log("Insufficient quantity to process order.")
        connection.end();
        return false
      }
      var qry = connection.query("UPDATE products SET stock_quantity= stock_quantity - ? WHERE item_id = ?", qryOpt, function (err) {
        console.log("Your Order will be Accepted")
        connection.end()

      });
    })
  }




// // connect to the mysql server and sql database
// connection.connect(function(err) {
//     if (err) throw err;
//     // run the start function after the connection is made to prompt the user
//     start();
//   });