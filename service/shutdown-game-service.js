"use strict",

SERVICE
.route(
	"/service/interface/game/tic-tac-toe/shutdown"
)
.put(
	[
		function executeRequestShutdownGame( request, response ){
			process
			.nextTick(
				function( ){
					process
					.exit(
						0
					);
				}
			);

			console
			.log(
				"request shutdown server done",

				"proceed server process termination"
			);

			response
			.status(
				200
			)
			.send(
				true
			);
		}
	]
);
