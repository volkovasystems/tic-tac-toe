"use strict";

import defaultExport from "proceed-callback.js";

const requestGetGameList = (
	async	function requestGetGameList( option, callback ){
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

export default requestGetGameList;
