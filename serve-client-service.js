"use strict";

const util = require( "util" );

const fastGlob = require( "fast-glob" );

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const serveClientService = (
	async	function serveClientService( option, callback ){
				option = (
						option

					||	{ }
				);

				(
					await	fastGlob(
								[
									"./service/**/*.js"
								],

								{
									"absolute": true,
									"dot": true
								}
							)
				)
				.forEach(
					require
				);

				return	(
							await	proceedCallback(
										option,

										callback
									)
						);
			}
);

module.exports = serveClientService;
