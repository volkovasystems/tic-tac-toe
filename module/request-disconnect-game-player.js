"use strict";

import defaultExport from "./proceed-callback.js";

const requestDisconnectGamePlayer = (
	async	function requestDisconnectGamePlayer( option, callback ){
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

export default requestDisconnectGamePlayer;
