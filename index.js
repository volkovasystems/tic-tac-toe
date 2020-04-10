"use strict";

const util = require( "util" );

const startServer = (
	require( "./start-server.js" )
);

try{
	(
		async	function( ){
					return	(
								await	startServer( )
							);
				}
	)( );
}
catch( error ){
	console
	.error(
		"cannot start server",

		`@error-data: ${ util.inspect( error ) }`
	);
}
