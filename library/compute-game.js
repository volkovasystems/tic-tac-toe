"use strict";

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const computeGame = (
	async	function computeGame( option, callback ){
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

module.exports = computeGame;
