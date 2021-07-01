const mysql = require('mysql');
require('dotenv').config();
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'inconnu060217',
        password : 'Puteaux92@',
        database : 'my_spotify'
    });

    connection.connect(function(err) {
        if (err) throw err
        console.log('You are now connected...')
    })

module.exports = connection;
