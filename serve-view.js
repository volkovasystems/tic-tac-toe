"use strict";

const fs = require( "fs" );
const path = require( "path" );
const util = require( "util" );

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const asyncFs = (
	fs
	.promises
);

const viewCache = { };

const serveView = (
	async	function serveView( option, callback ){
				option = (
						option

					||	{ }
				);

				const serverViewPath = (
						option
						.serverViewPath

					||	undefined
				);

				const viewDirectoryPath = (
						option
						.viewDirectoryPath

					||	undefined
				);

				const viewFileName = (
						option
						.viewFileName

					||	undefined
				);

				const viewFilePath = (
					path
					.resolve(
						__dirname,
						viewDirectoryPath,
						viewFileName
					)
				);

				const viewContent = (
						viewCache[ viewFilePath ]

					||	(
							await	asyncFs
									.readFile(
										viewFilePath
									)
						)
				);

				if(
						(
								viewFilePath
							in	viewCache
						)
					===	true
				){
						viewCache[ viewFilePath ]
					=	viewContent;
				}

				SERVICE
				.get(
					serverViewPath,

					function( request, response ){
						response
						.set(
							{
								"Content-Type": "text/html"
							}
						)
						.status(
							200
						)
						.send(
							viewContent
						);
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

module.exports = serveView;
