"use strict";

const util = require( "util" );

const express = require( "express" );

const bodyParser = require( "body-parser" );
const compression = require( "compression" );
const cookieParser = require( "cookie-parser" );
const expresSession = require( "express-session" );
const methodOverride = require( "method-override" );

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const configureServer = (
	async	function configureServer( option, callback ){
				option = (
						option

					||	{ }
				);

				const SERVICE = express( );

				/*;
					@note:
						Make express instance global.
					@end-note
				*/
				Object
				.defineProperty(
					global,
					"SERVICE",
					{
						"value": SERVICE,

						"configurable": false,
						"enumerable": false,
						"writable": false,
					}
				);

				SERVICE
				.use(
					methodOverride( )
				);

				SERVICE
				.use(
					bodyParser
					.urlencoded(
						{
							"extended": true,
							"limit": "16mb"
						}
					)
				);

				SERVICE
				.use(
					bodyParser
					.json(
						{
							"limit": "16mb"
						}
					)
				);

				SERVICE
				.use(
					cookieParser( )
				);

				SERVICE
				.use(
					compression( )
				);

				return	(
							await	proceedCallback(
										option,

										callback
									)
						);
			}
);

module.exports = configureServer;
