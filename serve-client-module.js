"use strict";

const path = require( "path" );
const util = require( "util" );

const express = require( "express" );

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const serveClientModule = (
	async	function serveClientModule( option, callback ){
				option = (
						option

					||	{ }
				);

				SERVICE
				.use(
					"/service/module/react",

					(
						express
						.static(
							path
							.resolve(
								__dirname,
								"node_modules/react/umd"
							)
						)
					)
				);

				SERVICE
				.use(
					"/service/module/react-dom",

					(
						express
						.static(
							path
							.resolve(
								__dirname,
								"node_modules/react-dom/umd"
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

module.exports = serveClientModule;
