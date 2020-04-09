"use strict";

import defaultExport from "proceed-callback.js";

const requestCreateGame = (
	async	function requestCreateGame( option, callback ){
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

export default requestCreateGame;
