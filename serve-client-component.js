"use strict";

const path = require( "path" );
const util = require( "util" );

const express = require( "express" );

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const serveClientComponent = (
	async	function serveClientComponent( option, callback ){
				option = (
						option

					||	{ }
				);

				SERVICE
				.use(
					"/service/component/game/tic-tac-toe",

					(
						express
						.static(
							path
							.resolve(
								__dirname,
								"component"
							)
						)
					)
				);

				return	(
							await	proceedCallback(
										option,

										callback
									)
						);
			}
);

module.exports = serveClientComponent;
