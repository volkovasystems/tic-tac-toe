"use strict";

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const connectGame = (
	async	function connectGame( option, callback ){
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

module.exports = connectGame;
