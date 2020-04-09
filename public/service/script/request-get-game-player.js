"use strict";

import defaultExport from "./proceed-callback.js";

const requestGetGamePlayer = (
	async	function requestGetGamePlayer( option, callback ){
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

export default requestGetGamePlayer;
