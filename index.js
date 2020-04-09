"use strict";

const server = require( "./server.js" );

(
	async	function( ){
				return	(
							await	server( )
						);
			}
)( );
