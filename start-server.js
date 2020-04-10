"use strict";

const util = require( "util" );

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const applyServerSetting = (
	require( "./apply-server-setting.js" )
);

const ensureDatabaseServer = (
	require( "./ensure-database-server.js" )
);

const configureServer = (
	require( "./configure-server.js" )
);

const serveClientService = (
	require( "./serve-client-service.js" )
);

const serveClientModule = (
	require( "./serve-client-module.js" )
);

const serveClientStyle = (
	require( "./serve-client-style.js" )
);

const serveClientComponent = (
	require( "./serve-client-component.js" )
);

const serveClientView = (
	require( "./serve-client-view.js" )
);

const serveClientIndex = (
	require( "./serve-client-index.js" )
);

const server = (
	async	function server( option, callback ){
				option = (
						option

					||	{ }
				);

				await	applyServerSetting( option );

				await	ensureDatabaseServer( option );

				await	configureServer( option );

				await	serveClientService( option );

				await	serveClientModule( option );

				await	serveClientStyle( option );

				await	serveClientComponent( option );

				await	serveClientView( option );

				await	serveClientIndex( option );

				/*;
					@note:
						Start NodeJS server instance to listen for incoming request.
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
									"start server listen done",

									`@server-host-address: ${ SERVER_HOST_ADDRESS }`,

									`@server-port-number: ${ SERVER_PORT_NUMBER }`
								);
							}
						);
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
