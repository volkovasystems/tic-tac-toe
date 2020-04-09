"use strict";

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const popGameSession = (
	async	function popGameSession( option, callback ){
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

module.exports = popGameSession;
