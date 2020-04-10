"use strict";

const path = require( "path" );
const util = require( "util" );

const proceedCallback = (
	require( "./utility/proceed-callback.js" )
);

const serverSettingPropertyDefinition = (
	{
		"configurable": false,
		"enumerable": false,
		"writable": false
	}
);

const defineServerSettingProperty = (
	function defineServerSettingProperty( property, value ){
		Object
		.defineProperty(
			global,

			property,

			(
				Object
				.assign(
					{
						"value": value
					},

					serverSettingPropertyDefinition
				)
			)
		);
	}
);

const applyServerSetting = (
	async	function applyServerSetting( option, callback ){
				option = (
						option

					||	{ }
				);

				const serverHostAddress = (
					"localhost"
				);

				defineServerSettingProperty(
					"SERVER_HOST_ADDRESS",
					serverHostAddress
				);


				const serverPortNumber = (
					54321
				);

				defineServerSettingProperty(
					"SERVER_PORT_NUMBER",
					serverPortNumber
				);

				const databaseServerHostAddress = (
					"localhost"
				);

				defineServerSettingProperty(
					"DATABASE_SERVER_HOST_ADDRESS",
					databaseServerHostAddress
				);

				const databaseServerPortNumber = (
					4321
				);

				defineServerSettingProperty(
					"DATABASE_SERVER_PORT_NUMBER",
					databaseServerPortNumber
				);

				const databaseNamespace = (
					"tic-tac-toe"
				);

				defineServerSettingProperty(
					"DATABASE_NAMESPACE",
					databaseNamespace
				);

				const databaseServerURI = (
					[
						`mongodb://${ databaseServerHostAddress }`,
						`:${ databaseServerPortNumber }`,
						`/${ databaseNamespace }`
					]
					.join(
						""
					)
				);

				defineServerSettingProperty(
					"DATABASE_SERVER_URI",
					databaseServerURI
				);

				const databaseServerLogPath = (
					path
					.resolve(
						__dirname,
						"database/local/.database.log"
					)
				);

				defineServerSettingProperty(
					"DATABASE_SERVER_LOG_PATH",
					databaseServerLogPath
				);

				const databaseDirectoryPath = (
					path
					.resolve(
						__dirname,
						"database/local"
					)
				);

				defineServerSettingProperty(
					"DATABASE_DIRECTORY_PATH",
					databaseDirectoryPath
				);

				const serverPublicStaticDirectoryPath = (
					path
					.resolve(
						__dirname,
						"public"
					)
				);

				defineServerSettingProperty(
					"SERVER_PUBLIC_STATIC_DIRECTORY_PATH",
					serverPublicStaticDirectoryPath
				);

				return	(
							await	proceedCallback(
										option,

										callback
									)
						);
			}
);

module.exports = applyServerSetting;
