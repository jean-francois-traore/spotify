var http = require("http");
const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());
// const mysql = require("mysql");
const bodyParser = require("body-parser");

	const server = app.listen(5000, "127.0.0.1", function () {
	const host = server.address().address;
	const port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});


app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

const artists_api = require('./API/artistes_api');
const albums_api = require('./API/albums_api');
const tracks_api = require('./API/tracks_api');
const genres_api = require('./API/genres_api');

// api des artistes et details de chaque artistes 
app.get('/artists', artists_api.artists);
app.get('/artists/:id', artists_api.details_artists);

// api des albums , details de chaque albums et leurs musique
app.get("/albums", albums_api.albums_all);
app.get("/albums/tracks/:id", albums_api.detail_album);
app.get("/albums/artists/:name", albums_api.albums_all_artists);

// api des musiques
app.get("/tracks/:name", tracks_api.tracks);

// api des genres et détail d’un genre et les id des albums le possédant
app.get("/genres", genres_api.genres);
app.get("/genres/albums/:id", genres_api.detail_genres_albums);