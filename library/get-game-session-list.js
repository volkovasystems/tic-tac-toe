"use strict";

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const getGameSessionList = (
	async	function getGameSessionList( option, callback ){
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

module.exports = getGameSessionList;
