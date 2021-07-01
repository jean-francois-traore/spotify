
var connectDB = require('./connexionDB');
exports.artists = (req, res) => {
    connectDB.query('select * from artists', function (error, results) {
	    if (error) throw error;
	    res.send(JSON.stringify(results));
	});
};

exports.details_artists = (req, res) => {
	let id = req.params.id
    connectDB.query('select * from artists where artists.id=?', id , function (error, results) {
	    if (error) throw error;
	    res.send(JSON.stringify(results));
	});
};
