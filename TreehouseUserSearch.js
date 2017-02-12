/*Somehow get the information from the user api json file

so for example: kanwisher.json is a json file

then we need to access the appropriate value inside the json file

We do this using an API/AJX call, or can we still pull the data another way?

JSON stringify */

//Print Treehouse account to console

const https = require('https');

function printMessage(username, badgeCount, points) {
	const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
		console.log(message);
}

function getProfile(username){





	const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

		let body = "";

		response.on('data', myData => {
			body += myData.toString();

		});

		response.on('end', () => {
			const myDataObject = JSON.parse(body);
			
			printMessage(username, myDataObject.badges.length, myDataObject.points.total)
		});


	});

}

nodeArray = process.argv.slice(2)

//const users = ["davidkanwisher", "alenaholligan", "davemcfarland"];


nodeArray.forEach(getProfile);
