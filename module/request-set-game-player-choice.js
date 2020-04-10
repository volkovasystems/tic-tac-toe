"use strict";

import defaultExport from "./proceed-callback.js";

const requestSetGamePlayerChoice = (
	async	function requestSetGamePlayerChoice( option, callback ){
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

export default requestSetGamePlayerChoice;
