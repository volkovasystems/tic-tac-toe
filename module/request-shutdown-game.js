"use strict";

import defaultExport from "./proceed-callback.js";

const requestShutdownGame = (
	async	function requestShutdownGame( option, callback ){
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

export default requestShutdownGame;
