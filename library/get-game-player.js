"use strict";

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const getGamePlayer = (
	async	function getGamePlayer( option, callback ){
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

module.exports = getGamePlayer;
