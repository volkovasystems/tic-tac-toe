"use strict",

SERVICE
.route(
	"/service/interface/tic-tac-toe/game/connect/:gameSessionReference"
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
