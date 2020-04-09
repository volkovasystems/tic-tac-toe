"use strict";

const childProcess = require( "child_process" );
const fs = require( "fs" );
const path = require( "path" );
const util = require( "util" );

const fastGlob = require( "fast-glob" );
const express = require( "express" );
const mongoose = require( "mongoose" );

const bodyParser = require( "body-parser" );
const compression = require( "compression" );
const cookieParser = require( "cookie-parser" );
const expresSession = require( "express-session" );
const methodOverride = require( "method-override" );

const asyncFs = (
	fs
	.promises
);

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const platformHostAddress = (
	"localhost"
);

const platformPortNumber = (
	54321
);

const databaseServerPortNumber = (
	4321
);

const databaseServerLogPath = (
	path
	.resolve(
		__dirname,
		"database/local/.database.log"
	)
)

const databaseNamespace = (
	"tic-tac-toe"
);

const databaseDirectoryPath = (
	path
	.resolve(
		__dirname,
		"database/local"
	)
);

const server = (
	async	function server( option, callback ){
				option = (
						option

					||	{ }
				);

				/*;
					@note:
						Start MongoDB server instance.
					@end-note
				*/
				process
				.nextTick(
					function( ){
						childProcess
						.exec(
							(
								[
									"mongod",
									`--fork`,
									`--logpath ${ databaseServerLogPath }`,
									`--port ${ databaseServerPortNumber }`,
									`--dbpath ${ databaseDirectoryPath }`
								]
								.join(
									" "
								)
							),

							function( error, stdout, stderr ){
								if(
										(
														error
											instanceof	Error
										)
									===	true
								){
									console
									.error(
										"cannot start database server",

										`@log-result: ${ stderr }`,

										`@error-data: ${ error }`
									);
								}
								else{
									console
									.error(
										"start database server done",

										`@log-result: ${ stdout }`
									);
								}
							}
						);
					}
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

				/*;
					@note:
						Load all services.
					@end-note
				*/
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

				/*;
					@note:
						Start NodeJS server instance.
					@end-note
				*/
				process
				.nextTick(
					function( ){
						SERVICE
						.listen(
							platformPortNumber,
							platformHostAddress,

							function( ){
								console
								.log(
									"start server done",

									"server host address:",
									platformHostAddress,

									"server port number:",
									platformPortNumber
								);
							}
						);
					}
				);

				/*;
					@note:
						Stop MongoDB server instance.
					@end-note
				*/
				process
				.once(
					"exit",
					function( ){
						childProcess
						.exec(
							(
								[
									"mongo",
									`--port ${ databasePortNumber }`,
									`--eval "db.getSiblingDB( 'admin' ).shutdownServer( );"`
								]
								.join(
									" "
								)
							),

							function( error, stdout, stderr ){
								if(
										(
														error
											instanceof	Error
										)
									===	true
								){
									console
									.error(
										"cannot stop database server",

										`@log-result: ${ stderr }`,

										`@error-data: ${ error }`
									);
								}
								else{
									console
									.log(
										"stop database server done",

										`@log-result: ${ stdout }`
									);
								}
							}
						);
					}
				);

				if(
						typeof
						callback
					==	"function"
				){
					return	(
								await	proceedCallback(
											option,

											callback
										)
							);
				}
			}
);

module.exports = server;
