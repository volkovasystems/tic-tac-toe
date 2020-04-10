"use strict";

const requestShutdownGame = (
	async	function requestShutdownGame( option, callback ){
				option = (
						option

					||	{ }
				);

				await	fetch(
							"/service/interface/game/tic-tac-toe/shutdown",
							{
								"method": "PUT"
							}
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
