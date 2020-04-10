"use strict";

const util = require( "util" );

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const serveView = (
	require( "./serve-view.js" )
);

const serveClientIndex = (
	async	function serveClientIndex( option, callback ){
				option = (
						option

					||	{ }
				);

				const viewDirectoryPath = (
					__dirname
				);

				const viewFileName = (
					"index.html"
				);

				await	serveView(
							{
								"serverViewPath": "/",
								"viewDirectoryPath": viewDirectoryPath,
								"viewFileName": viewFileName
							}
						);

				await	serveView(
							{
								"serverViewPath": "/home",
								"viewDirectoryPath": viewDirectoryPath,
								"viewFileName": viewFileName
							}
						);

				await	serveView(
							{
								"serverViewPath": "/index",
								"viewDirectoryPath": viewDirectoryPath,
								"viewFileName": viewFileName
							}
						);

				return	(
							await	proceedCallback(
										option,

										callback
									)
						);
			}
);

module.exports = serveClientIndex;
