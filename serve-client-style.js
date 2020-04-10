"use strict";

const path = require( "path" );
const util = require( "util" );

const express = require( "express" );

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const serveClientStyle = (
	async	function serveClientStyle( option, callback ){
				option = (
						option

					||	{ }
				);

				SERVICE
				.use(
					"/service/style/reset-css",

					(
						express
						.static(
							path
							.resolve(
								__dirname,
								"node_modules/reset-css"
							)
						)
					)
				);

				SERVICE
				.use(
					"/service/style/game/tic-tac-toe",

					(
						express
						.static(
							path
							.resolve(
								__dirname,
								"style"
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

module.exports = serveClientStyle;
