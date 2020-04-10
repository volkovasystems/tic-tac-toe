"use strict";

const childProcess = require( "child_process" );
const os = require( "os" );
const util = require( "util" );

const mongoose = require( "mongoose" );

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const asyncChildProcessExecute = (
	util
	.promisify(
		childProcess
		.exec
	)
);

const ensureDatabaseServer = (
	async	function ensureDatabaseServer( option, callback ){
				option = (
						option

					||	{ }
				);

				/*;
					@note:
						Start MongoDB server instance.

						This will ensure that we will only start the same database server.
						Existing database server not previously terminated will be terminated.

						This has temporary support for non-Window OS.
					@end-note
				*/
				process
				.nextTick(
					async	function( ){
								const stopDatabaseServerScript = (
									[
										"mongo",
										`--port ${ DATABASE_SERVER_PORT_NUMBER }`,
										`--eval "db.getSiblingDB( 'admin' ).shutdownServer( );"`
									]
									.join(
										" "
									)
								);

								/*;
									@note:
										Determine if non-Window OS.

										If non-Window OS, try connecting to database server.
										Terminate if connection failed.
									@end-note
								*/
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
									);

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
								else{
									/*;
										@note:
											If non-Window OS, stop non-terminated database server.
										@end-note
									*/
									try{
										const { stdout, stderr } = (
											await	asyncChildProcessExecute(
														stopDatabaseServerScript
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
								}

								/*;
									@note:
										Start fresh database server.
									@end-note
								*/
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
								);

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
																	stopDatabaseServerScript
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
							}
				);

				
			}
);

module.exports = ensureDatabaseServer;
