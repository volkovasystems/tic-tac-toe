"use strict";

import defaultExport from "./proceed-callback.js";

const requestGetGameItem = (
	async	function requestGetGameItem( option, callback ){
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

export default requestGetGameItem;
