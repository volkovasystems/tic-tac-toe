"use strict",

SERVICE
.route(
	"/service/interface/game/tic-tac-toe/connect/:gameSessionReference"
)
.post(
	[
		function executeRequestConnectGame( request, response ){
			const gameSessionReference = (
				request
				.query
				.gameSessionReference
			);


		}
	]
);
