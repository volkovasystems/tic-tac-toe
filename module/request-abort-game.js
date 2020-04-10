"use strict";

import defaultExport from "./proceed-callback.js";

const requestAbortGame = (
	async	function requestAbortGame( option, callback ){
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

export default requestAbortGame;
