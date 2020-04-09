
const functions = require("firebase-functions"),
	express = require("express"),
	app = express(),
	admin = require("firebase-admin");

/*=============================================>>>>>

				= init and config =

===============================================>>>>>*/

admin.initializeApp({
	credential: admin.credential.applicationDefault()
});

app.set("views", "./views");
app.set("view engine", "ejs");
var db = admin.firestore();

app.get("/", (req, res) => {
		res.render("login");
});

exports.app = functions.https.onRequest(app);

