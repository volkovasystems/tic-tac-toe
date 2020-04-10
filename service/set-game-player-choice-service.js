"use strict",

SERVICE
.route(
	"/service/interface/game/tic-tac-toe/:gameSessionReference/player/:playerPiece/set/choice/:playerChoiceIndex"
)
.put(
	[
		function executeRequestSetGamePlayerChoice( request, response ){

		}
	]
);
