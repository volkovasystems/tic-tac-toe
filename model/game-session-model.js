"use strict";

const mongoose = require( "mongoose" );

const GameSessionSchema = (
	require( "../schema/game-session-schema.js" )
);

const Model = (
	mongoose
	.model
	.bind(
		mongoose
	)
);

const GameSession = (
	Model(
		"GameSession",
		GameSessionSchema
	)
);

Object
.defineProperty(
	global,
	"GameSession",

	{
		"value": GameSession,

		"configurable": false,
		"enumerable": false,
		"writable": false
	}
);

module.exports = GameSession;
