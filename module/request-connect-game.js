"use strict";

import defaultExport from "./proceed-callback.js";

const requestConnectGame = (
	async	function requestConnectGame( option, callback ){
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

export default requestConnectGame;
