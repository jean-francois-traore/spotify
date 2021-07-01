const connectDB = require('./connexionDB');
exports.genres = (req, res) =>{
    connectDB.query('select * from ', function (error, results) {
	    if (error) throw error;
	    res.send(JSON.stringify(results));
	});
}

exports.detail_genres_albums = (req, res) =>{
    let id = req.params.id;
    connectDB.query('SELECT genres.name, albums.id FROM genres_albums INNER JOIN genres ON genres_albums.genre_id = genres.id INNER JOIN albums ON genres_albums.album_id = albums.id WHERE genres.id=?', id , function (error, results) {
	    if (error) throw error;
	    res.send(JSON.stringify(results));
	});
}