const connection = require("../config/connection.js");

const orm = {
    selectAll : function(tableInput){
        let queryString = `SELECT * FROM ??`;
        connection.query(queryString, [tableInput], function(err,result){
          if (err) throw err;
          console.log(result);
        })
    
      },

    insertOne : function(tableInput){
        let queryString = `UPDATE  `;
        connection.query(queryString, [tableInput], function(err,result){
          if (err) throw err;
          console.log(result);
        })
    
      },
    
    




}

// insertOne();
// updateOne();

module.exports = orm;
