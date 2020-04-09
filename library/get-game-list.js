"use strict";

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const getGameList = (
	async	function getGameList( option, callback ){
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

module.exports = getGameList;
