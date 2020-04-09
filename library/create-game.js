"use strict";

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const createGame = (
	async	function createGame( option, callback ){
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

module.exports = createGame;
