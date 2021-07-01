const connectDB = require("./connexionDB");

exports.albums_all = (req, res) => {
  	connectDB.query("select * from albums", function (error, results) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
};
exports.detail_album = (req, res) => {
	let id = req.params.id;
	connectDB.query(`SELECT *, tracks.name FROM tracks INNER JOIN albums ON tracks.album_id = albums.id WHERE albums.id=${id}`,
    function (error, results) {
		if (error) throw error;
			res.send(JSON.stringify(results));
		}
	);
};
exports.albums_all_artists = (req, res) => {
	let name = req.params.name;
	connectDB.query("SELECT albums.name FROM albums INNER JOIN artists ON albums.artist_id = artists.id WHERE artists.name=?", name ,function (error, results) {
		if (error) throw error;
			res.send(JSON.stringify(results));
		}
	);
};

