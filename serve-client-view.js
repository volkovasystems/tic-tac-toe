"use strict";

const path = require( "path" );
const util = require( "util" );

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const serveView = (
	require( "./serve-view.js" )
);

const serveClientView = (
	async	function serveClientView( option, callback ){
				option = (
						option

					||	{ }
				);

				const viewDirectoryPath = (
					path
					.resolve(
						__dirname,
						"view"
					)
				);

				await	serveView(
							{
								"serverViewPath": "/service/view/game/tic-tac-toe/create",
								"viewDirectoryPath": viewDirectoryPath,
								"viewFileName": "create-game-view.html"
							}
						);

				await	serveView(
							{
								"serverViewPath": "/service/view/game/tic-tac-toe/start",
								"viewDirectoryPath": viewDirectoryPath,
								"viewFileName": "start-game-view.html"
							}
						);

				await	serveView(
							{
								"serverViewPath": "/service/view/game/tic-tac-toe/play",
								"viewDirectoryPath": viewDirectoryPath,
								"viewFileName": "play-game-view.html"
							}
						);

				return	(
							await	proceedCallback(
										option,

										callback
									)
						);
			}
);

module.exports = serveClientView;
