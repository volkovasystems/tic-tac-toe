"use strict";

const mongoose = require( "mongoose" );
const uuidv4 = require( "uuid/v4" );
const util = require( "util" );

const Schema = (
	mongoose
	.Schema
);

const GameSessionSchema = (
	new	Schema(
			{
				"gameSessionReference": [
					{
						"type": String,
						"default": (
							function( ){
								return	(
											uuidv4( )
										);
							}
						),

						"required": true,
						"trim": true,
						"unique": true
					}
				],

				"playerNamePhrase": {
					"type": String,
					"default": "",

					"trim": true
				},

				"playerGamePiece": {
					"type": String,
					"enum": [
						"o",
						"x",
						"-"
					],
					"default": "-",

					"trim": true
				},

				"playerChoiceIndex": {
					"type": String,
					"enum": [
						"0",
						"1",
						"2",
						"3",
						"4",
						"5",
						"6",
						"7",
						"8",
						"9",
					],
					"default": "0",

					"trim": true
				},

				"status": {
					"type": Boolean,
					"default": false
				},

				"state": [
					{
						"type": String,
						"enum": [
							"initialized",
							"connected",
							"aborted",
							"completed",
							"failed",

							"none"
						],
						"default": "none"

						"trim": true
					}
				],

				"dateTimeIndexStamp": {
					"type": Number,
					"default": (
						function( ){
							const dateNowObject = (
								new	Date( )
							);

							return  (
										parseInt(
											[
												(
													dateNowObject
													.getFullYear( )
												),

												(
													(
															dateNowObject
															.getUTCMonth( )
														+   1
													)
													.toString( )
													.padStart(
														2,
														"0"
													)
												),

												(
													dateNowObject
													.getUTCDate( )
													.toString( )
													.padStart(
														2,
														"0"
													)
												),

												(
													dateNowObject
													.getUTCHours( )
													.toString( )
													.padStart(
														2,
														"0"
													)
												),

												(
													dateNowObject
													.getUTCMinutes( )
													.toString( )
													.padStart(
														2,
														"0"
													)
												),

												(
													dateNowObject
													.getUTCSeconds( )
													.toString( )
													.padStart(
														2,
														"0"
													)
												)
											]
											.join(
												""
											)
										)
									);
						}
					)
				}
			},

			{
				"collection": "game-session-list",
				"versionKey": false
			}
		)
);

module.exports = GameSessionSchema;
