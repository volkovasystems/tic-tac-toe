"use strict";

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const getGameSession = (
	async	function getGameSession( option, callback ){
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

module.exports = getGameSession;
