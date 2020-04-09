"use strict";

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const pushGameSession = (
	async	function pushGameSession( option, callback ){
				option = (
						option

					||	{ }
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

module.exports = pushGameSession;
