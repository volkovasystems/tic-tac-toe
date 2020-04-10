"use strict";

const childProcess = require( "child_process" );
const fs = require( "fs" );
const os = require( "os" );
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

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const applyServerSetting = (
	require( "./apply-server-setting.js" )
);

const serveClientModule = (
	require( "./serve-client-module.js" )
);

const serveClientView = (
	require( "./serve-client-view.js" )
);

const serveClientIndex = (
	require( "./serve-client-index.js" )
);

const asyncFs = (
	fs
	.promises
);

const asyncChildProcessExecute = (
	util
	.promisify(
		childProcess
		.exec
	)
);

const server = (
	async	function server( option, callback ){
				option = (
						option

					||	{ }
				);

				await	applyServerSetting( option );

				/*;
					@note:
						Start MongoDB server instance.

						This will ensure that we will only start the same database server.
						Existing database server not previously terminated will be terminated.
					@end-note
				*/
				process
				.nextTick(
					async	function( ){
								const osType = (
									os
									.type( )
								);

								if(
										(
												osType
											!==	"Linux"
										)
									&&	(
												osType
											!==	"Darwin"
										)
								){
									console
									.log(
										"cannot start database server forked process",
										"operating system not supported",

										"please start independent database server procedure",

										"proceed attempt connect database server",

										`@os-type: ${ osType }`
									);

									mongoose
									.connect(
										DATABASE_SERVER_URI,

										{
											"useNewUrlParser": true,
											"useUnifiedTopology": true
										}
									)

									mongoose
									.connection
									.on(
										"error",
										function( ){
											console
											.error(
												"cannot connect database server",

												"proceed server process termination"
											);

											process
											.exit(
												1
											);

											return;
										}
									);

									mongoose
									.connection
									.once(
										"open",
										function( ){
											console
											.log(
												"connect database server done"
											);
										}
									);

									return;
								}

								try{
									const { stdout, stderr } = (
										await	asyncChildProcessExecute(
													[
														"mongo",
														`--port ${ DATABASE_SERVER_PORT_NUMBER }`,
														`--eval "db.getSiblingDB( 'admin' ).shutdownServer( );"`
													]
													.join(
														" "
													)
												)
									);

									if(
											(
													typeof
													stderr
												==	"string"
											)

										&&	(
													stderr
													.length
												>	0
											)
									){
										console
										.error(
											"cannot stop non-terminated database server",

											"please start independent stop database server procedure",

											"proceed server process termination",

											`@log-result: ${ stdout }`,
											`@error-log-result: ${ stderr }`
										);

										process
										.exit(
											1
										);

										return;
									}
									else{
										console
										.log(
											"stop non-terminated database server done",

											`@log-result: ${ stdout }`
										);
									}

								}
								catch( error ){
									console
									.error(
										"cannot stop non-terminated database server",

										"proceed start database server",

										`@error-data: ${ error }`
									);
								}

								try{
									const { stdout, stderr } = (
										await	asyncChildProcessExecute(
													[
														"mongod",

														`--fork`,
														`--logpath ${ DATABASE_SERVER_LOG_PATH }`,

														`--port ${ DATABASE_SERVER_PORT_NUMBER }`,
														`--dbpath ${ DATABASE_DIRECTORY_PATH }`
													]
													.join(
														" "
													)
												)
									);

									if(
											(
													typeof
													stderr
												==	"string"
											)

										&&	(
													stderr
													.length
												>	0
											)
									){
										console
										.error(
											"cannot start database server",

											"proceed server process termination",

											`@log-result: ${ stdout }`,
											`@error-log-result: ${ stderr }`
										);

										process
										.exit(
											1
										);

										return;
									}
									else{
										console
										.log(
											"start database server done",

											`@log-result: ${ stdout }`
										);
									}
								}
								catch( error ){
									console
									.error(
										"cannot start database server",

										"proceed server process termination",

										`@error-data: ${ error }`
									);

									process
									.exit(
										1
									);

									return;
								}

								mongoose
								.connect(
									DATABASE_SERVER_URI,

									{
										"useNewUrlParser": true,
										"useUnifiedTopology": true
									}
								)

								mongoose
								.connection
								.on(
									"error",
									function( ){
										console
										.error(
											"cannot connect database server"
										);
									}
								);

								mongoose
								.connection
								.once(
									"open",
									function( ){
										console
										.log(
											"connect database server done"
										);
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

				await	serveClientIndex( option );

				await	serveClientModule( option );
				await	serveClientView( option );

				SERVICE
				.use(
					express
					.static(
						SERVER_PUBLIC_STATIC_DIRECTORY_PATH
					)
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
							SERVER_PORT_NUMBER,
							SERVER_HOST_ADDRESS,

							function( ){
								console
								.log(
									"start server done",

									`@server-host-address: ${ SERVER_HOST_ADDRESS }`,

									`@server-port-number: ${ SERVER_PORT_NUMBER }`
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
					async	function( ){
								try{
									const { stdout, stderr } = (
										await	asyncChildProcessExecute(
													[
														"mongo",
														`--port ${ DATABASE_SERVER_PORT_NUMBER }`,
														`--eval "db.getSiblingDB( 'admin' ).shutdownServer( );"`
													]
													.join(
														" "
													)
												)
									);

									if(
											(
													typeof
													stderr
												==	"string"
											)

										&&	(
													stderr
													.length
												>	0
											)
									){
										console
										.error(
											"cannot stop database server",

											`@log-result: ${ stdout }`,
											`@error-log-result: ${ stderr }`
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
								catch( error ){
									console
									.error(
										"cannot stop database server",

										`@error-data: ${ error }`
									);
								}
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

module.exports = server;
