"use strict";

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const setGamePlayerChoice = (
	async	function setGamePlayerChoice( option, callback ){
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

module.exports = setGamePlayerChoice;
